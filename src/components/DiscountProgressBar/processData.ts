import { DiscountProgressConfig, ProgressItem } from "../../types";

export const processData = (
  config: DiscountProgressConfig,
  subTotal: number
): ProgressItem[] => {
  let lastLimit = 0;

  return Object.entries(config).map(([limitString, discount], index) => {
    const limit = parseInt(limitString);

    //si flag subtotal + descuento anterior

    if (subTotal >= limit) {
      //encender una flag
      //

      lastLimit = limit;

      return {
        stage: index,
        percent: 100,
        discount,
        limit,
      };
    } else {
      //chequear si no lo supere ya con un descuento

      const percent = Math.round(
        ((subTotal - lastLimit) / (limit - lastLimit)) * 100
      );

      lastLimit = subTotal;

      return {
        stage: index,
        percent,
        discount,
        limit,
      };
    }
  });
};
