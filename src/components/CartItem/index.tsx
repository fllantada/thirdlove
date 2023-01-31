import React from "react";
import { ILineItem } from "../../types";

interface CartItemProps {
  lineItem: ILineItem;
}

const CartItem: React.FunctionComponent<CartItemProps> = ({ lineItem }) => {
  return <div></div>;
};

export default CartItem;
