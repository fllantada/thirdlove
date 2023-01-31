import React from "react";
import { ILineItem } from "../../types";

interface CartItemProps {
  lineItem: ILineItem;
}

const CartItem: React.FunctionComponent<CartItemProps> = ({ lineItem }) => {
  return (
    <div>{"Item:  :" + lineItem.product + "Price:    " + lineItem.price}</div>
  );
};

export default CartItem;
