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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            margin: "10px 0px",
          }}
        >
          <div className={styles.TitleSpace}>
            <CardInfo title={lineItem.product} type={lineItem.productType} />
          </div>
          x
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",

            width: "100%",
            margin: "0px 0px",
          }}
        >
          <div className={styles.ButtonSpace}>
            <CardButton />
          </div>
          <div className={styles.PriceSpace}>$550</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
