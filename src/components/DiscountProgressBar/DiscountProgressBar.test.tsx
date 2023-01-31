import React from "react";
import { render, screen } from "@testing-library/react";
import { ILineItem, DiscountProgressConfig } from "../../types";
import DiscountProgressBar from "./DiscountProgressBar";

const mock_lineItems: ILineItem[] = [
  { productType: "type1", product: "price1", price: 100 },
  { productType: "type2", product: "price2", price: 200 },
  { productType: "type3", product: "price3", price: 300 },
  { productType: "type4", product: "price4", price: 400 },
];
const moock_config: DiscountProgressConfig = {
  100: 10,
  200: 20,
  300: 30,
  400: 40,
  500: 50,
};
const mock_total = 950;

describe("Testing Discount Progress Bar", () => {
  it("renders the correct title and subtitle", () => {
    render(
      <DiscountProgressBar
        lineItems={mock_lineItems}
        config={moock_config}
        total={mock_total}
      />
    );
    expect(screen.getByText("BUILD YOUR KIT & SAVE")).toBeInTheDocument();
    expect(screen.getByText("Spend $1000, Save $50")).toBeInTheDocument();
  });

  it("renders the correct number of ProgressElement components", () => {
    render(
      <DiscountProgressBar
        lineItems={mock_lineItems}
        config={moock_config}
        total={mock_total}
      />
    );
    const { container } = render(
      <DiscountProgressBar
        lineItems={mock_lineItems}
        config={moock_config}
        total={mock_total}
      />
    );

    expect(container.getElementsByClassName("BarContainer")).toHaveLength(5);
  });
});
