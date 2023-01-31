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
          <button className={styles.DelateButton}>X</button>
        </div>

        <div className={styles.Subtitle}>Tipo de producto</div>
        <div className={styles.Description}>alguna descripcion</div>

        <div className={styles.ButtonContainer}>
          <button className={styles.CustomButton}>+</button>1
          <button className={styles.CustomButton}>-</button>
          <div className={styles.Price}>${lineItem.price}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
