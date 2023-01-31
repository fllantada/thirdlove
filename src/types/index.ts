export interface ILineItem {
  product: string;
  productType: string;
  price: number;
}

export interface DiscountProgressConfig {
  [total: number]: number;
}

export interface ProgressItem {
  stage: number;
  limit: number;
  percent: number;
  discount: number;
}
