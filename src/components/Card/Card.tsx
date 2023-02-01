import React from "react";
import { ILineItem } from "../../types";
import CardImage from "./CarImage";
import CardInfo from "./CardInfo";
import styles from "./Card.module.css";

interface CartItemProps {
  lineItem: ILineItem;
  image?: string;
  subtitle?: string;
  add?: () => void;
  remove?: () => void;
  delete?: () => void;
}

const Card: React.FunctionComponent<CartItemProps> = ({
  lineItem,
  image = "https://picsum.photos/200/300",
  subtitle = "default subtitle",
  add,
  remove,
}) => {
  return (
    <div className={styles.Container}>
      <CardImage />

      <div className={styles.ContentContainer}>
        <CardInfo title={lineItem.product} type={lineItem.productType} />

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
