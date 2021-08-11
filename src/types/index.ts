export interface ILineItem {
  product: string;
  productType: string;
  price: number;
}

export interface DiscountProgressConfig {
  [total: number]: number;
}
