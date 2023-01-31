import { render, screen } from "@testing-library/react";
import { ILineItem, DiscountProgressConfig } from "../../types";
import ProgressElement from "./ProgressElement";

describe("Testing Discount Progress Bar Element", () => {
  it("render the label", () => {
    render(<ProgressElement percent={10} label={"10"} />);

    expect(screen.getByText("$10 OFF")).toBeInTheDocument();
  });

  it("render the correct width filled", () => {
    render(<ProgressElement percent={10} label={"10"} />);
    const { container } = render(<ProgressElement percent={10} label={"10"} />);
    const filled = container.getElementsByClassName("Filled")[0];
    expect(filled).toHaveStyle("width: 10%");
  });

  it("render the correct width empty", () => {
    render(<ProgressElement percent={10} label={"10"} />);
    const { container } = render(<ProgressElement percent={10} label={"10"} />);
    const empty = container.getElementsByClassName("Empty")[0];
    expect(empty).toHaveStyle("width: 90%");
  });

  /*  it("renders the correct number of ProgressElement components", () => {
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
  }); */
});
