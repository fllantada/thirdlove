import React from "react";
import { ILineItem, DiscountProgressConfig, ProgressItem } from "../../types";
import { processData } from "./processData";
import ProgressElement from "./ProgressElement";
import styles from "./DiscountProgressBar.module.css";
import ProgressTitle from "./ProgressTitle";

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
  //Options, A) change props from total to subTotal and remove this line and avoid O(N) unnecessary loop and DRY issue
  //alternative,B) processData function will not be so verbose and simple. I choose this option
  const subTotal = lineItems.reduce((reducer, item) => reducer + item.price, 0);

  const discount = subTotal - total;

  const ProgressBarItems: ProgressItem[] = processData(config, subTotal);

  return (
    <>
      <div className={styles.Container}>
        <ProgressTitle
          title='BUILD YOUR KIT & SAVE'
          subtitle={`Spend $${subTotal}, Save $${discount}`}
        />

        <div className={styles.ProgressContainer}>
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
      </div>
    </>
  );
};

export default DiscountProcessBar;
