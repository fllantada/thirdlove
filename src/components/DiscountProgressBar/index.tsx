import React from 'react';
import { ILineItem, DiscountProgressConfig } from '../../types';

interface DiscountProcessBarProps {
  total: number;
  lineItems: ILineItem[];
  config: DiscountProgressConfig;
}

const DiscountProcessBar: React.FunctionComponent<DiscountProcessBarProps> = ({
  total,
  lineItems,
  config,
}) => {
  return (<div>Future Discount Progress</div>);
};

export default DiscountProcessBar;