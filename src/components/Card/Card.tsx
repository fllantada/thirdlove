import React from "react";
import { ILineItem } from "../../types";
import CardImage from "./CarImage";
import CardInfo from "./CardInfo";
import styles from "./Card.module.css";
import CardButton from "./CardButton";

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
        <CardButton />
      </div>
    </div>
  );
};

export default Card;
