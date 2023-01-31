import { processData } from "./processData";
import { DiscountProgressConfig } from "../../types";

//agregar el caso en que el subtota sea menor que el limite menor espero ninguno en 100 y en % chicos

describe("--->testing functionality that process data for the progress bar<---", () => {
  it("should return an empty array when given an empty config", () => {
    const config: DiscountProgressConfig = {};
    const subTotal = 100;
    const result = processData(config, subTotal);
    expect(result).toEqual([]);
  });
  it("should work when is at the first stage with no stage at 100%", () => {
    const config: DiscountProgressConfig = {
      500: 10,
      600: 20,
    };
    const subtotal = 50;
    const result = processData(config, subtotal);
    expect(result).toEqual([
      {
        stage: 0,
        limit: 500,
        percent: 10,
        discount: 10,
      },
      {
        stage: 1,
        limit: 600,
        percent: 0,
        discount: 20,
      },
    ]);
  });

  it("should return an array with 100% progress when subTotal >= limit", () => {
    const config: DiscountProgressConfig = {
      100: 10,
      200: 20,
    };
    const subTotal = 200;
    const result = processData(config, subTotal);
    expect(result).toEqual([
      {
        stage: 0,
        limit: 100,
        percent: 100,
        discount: 10,
      },
      {
        stage: 1,
        limit: 200,
        percent: 100,
        discount: 20,
      },
    ]);
  });

  it("should return an array with partial progress when subTotal < limit", () => {
    const config: DiscountProgressConfig = {
      100: 10,
      200: 20,
    };
    const subTotal = 150;
    const result = processData(config, subTotal);
    expect(result).toEqual([
      {
        stage: 0,
        limit: 100,
        percent: 100,
        discount: 10,
      },
      {
        stage: 1,
        limit: 200,
        percent: 50,
        discount: 20,
      },
    ]);
  });
  it("should give same result when the numbers are higher than higest limit", () => {
    const config: DiscountProgressConfig = {
      500: 10,
      600: 20,
    };
    const subtotal1 = 1000;
    const subtotal2 = 50000;

    const result1 = processData(config, subtotal1);
    const result2 = processData(config, subtotal2);
    expect(result1).toEqual(result2);
    expect(result1.length).toEqual(2);
  });
});
