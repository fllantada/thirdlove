import { processData } from "./processData";
import { DiscountProgressConfig } from "../../../types";

describe("processData", () => {
  it("should return an empty array when given an empty config", () => {
    const config: DiscountProgressConfig = {};
    const subTotal = 100;
    const result = processData(config, subTotal);
    expect(result).toEqual([]);
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
});
