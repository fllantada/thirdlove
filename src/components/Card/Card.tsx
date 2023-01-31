import React from "react";
import { ILineItem } from "../../types";
import styles from "./Card.module.css";

interface CartItemProps {
  lineItem: ILineItem;
}

const Card: React.FunctionComponent<CartItemProps> = ({ lineItem }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.ImageContainer}>Image</div>
      <div className={styles.ContentContainer}>
        <div className={styles.TitleContainer}>
          <div className={styles.Title}> {lineItem.product}</div>
          <div className={styles.DelateButton}>X</div>
        </div>

        <div className={styles.Price}>${lineItem.price}</div>
        <div className={styles.ButtonContainer}>
          <button className={styles.CustomButton}>+</button>5
          <button className={styles.CustomButton}>-</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
