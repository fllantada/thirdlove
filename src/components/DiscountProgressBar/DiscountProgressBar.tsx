import React from "react";
import { ILineItem, DiscountProgressConfig } from "../../types";
import { processData, ProgressItem } from "./helpers/processData";
import ProgressElement from "./ProgressElement";
import styles from "./DiscountProgressBar.module.css";

interface DiscountProcessBarProps {
  total: number;
  lineItems: ILineItem[];
  config: DiscountProgressConfig;
}

const DiscountProcessBar: React.FunctionComponent<DiscountProcessBarProps> = ({
  total,
  lineItems,
  config,
}) => {
  const subTotal = lineItems.reduce((reducer, item) => reducer + item.price, 0);

  const ProgressBarItems: ProgressItem[] = processData(config, subTotal);

  return (
    <div className={styles.Container}>
      {ProgressBarItems.map((item, index) => {
        return (
          <ProgressElement
            percent={item.percent}
            label={item.discount.toString()}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default DiscountProcessBar;
