import React, { useState } from "react";
import "./App.css";
import DiscountProcessBar from "./components/DiscountProgressBar";
import CartItem from "./components/CartItem.tsx";
import { ILineItem, DiscountProgressConfig } from "./types";

const bras1: ILineItem = {
  product: "T-Shirt Bra",
  productType: "bras",
  price: 55,
};

const bras2: ILineItem = {
  product: "Wireless Bra",
  productType: "bras",
  price: 35,
};

const panties: ILineItem = {
  product: "Seamless Panties",
  productType: "paties",
  price: 12,
};

function App() {
  const initialValue: ILineItem[] = [];
  const [lineItems, setLineItems] = useState(initialValue);

  const subtotal = lineItems.reduce((reducer, item) => reducer + item.price, 0);
  // This is the current configuration but could change at any point.
  // the key is the total and the value is the discount apply
  const config: DiscountProgressConfig = {
    135: 15,
    150: 20,
    200: 30,
    300: 50,
  };

  const discountApply = Object.entries(config)
    .reverse()
    .find(([limit, _]) => {
      return subtotal >= parseInt(limit);
    });
  const total = subtotal - (discountApply ? discountApply[1] : 0);
  const addProduct = (item: ILineItem) => () =>
    setLineItems((prev) => {
      return [...prev, item];
    });
  return (
    <div className='App'>
      <span>Test my component</span>
      <DiscountProcessBar total={total} lineItems={lineItems} config={config} />
      <div className='App-total'>
        <span>Subtotal:</span>
        <span>{subtotal}</span>
      </div>
      <div className='App-total'>
        <span>Total:</span>
        <span>{total}</span>
      </div>
      <div className='App-button-section'>
        <button onClick={addProduct(bras1)}>Add Bras 1</button>
        <button onClick={addProduct(bras2)}>Add Bras 2</button>
        <button onClick={addProduct(panties)}>Add Underwear</button>
      </div>
      {lineItems.map((item, index) => {
        return <CartItem key={index} lineItem={item} />;
      })}
    </div>
  );
}

export default App;
