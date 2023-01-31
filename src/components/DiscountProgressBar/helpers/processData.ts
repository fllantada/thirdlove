import { DiscountProgressConfig } from "../../../types";

export interface ProgressItem {
  stage: number;
  limit: number;
  percent: number;
  discount: number;
}

export const processData = (
  config: DiscountProgressConfig,
  subTotal: number
): ProgressItem[] => {
  let lastLimit = 0;

  return Object.entries(config).map(([limit, discount], index) => {
    if (subTotal >= parseInt(limit)) {
      console.log("ENTRE A BARRA LLENA");
      lastLimit = parseInt(limit);

      return {
        stage: index,
        percent: 100,
        discount,
        limit: parseInt(limit),
      };
    } else {
      //chequear si no lo supere ya con un descuento

      const percent = Math.round(
        ((subTotal - lastLimit) / (parseInt(limit) - lastLimit)) * 100
      );

      lastLimit = subTotal;

      return {
        stage: index,
        percent,
        discount,
        limit: parseInt(limit),
      };
    }
  });
};
