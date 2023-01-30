import React from "react";
import { ILineItem, DiscountProgressConfig } from "../../types";

interface CartItemProps {
  lineItem: ILineItem;
}

const CartItem: React.FunctionComponent<CartItemProps> = ({ lineItem }) => {
  console.log(lineItem);
  return <div>cartItem</div>;
};

export default CartItem;
