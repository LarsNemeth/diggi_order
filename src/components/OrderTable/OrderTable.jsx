import React from 'react';
import UserOpenOrder from '../OpenOrder/UserOpenOrder';
import OrderInput from './OrderInput';
import OrderHeadline from './OrderHeadline';
import OrderList from './OrderList';
import OrderFooter from './OrderFooter';
// import { DataProvider } from '../DataProvider';

const OrderTable = () => {
  return (
    // <DataProvider>
    <div className="order-table-container">
      <UserOpenOrder />
      <OrderHeadline />
      <div className="order-wrapper">
        <div className="order-form-container">
          <OrderInput />
          <OrderList />
          <OrderFooter />
        </div>
      </div>
    </div>
    // </DataProvider>
  );
};

export default OrderTable;
