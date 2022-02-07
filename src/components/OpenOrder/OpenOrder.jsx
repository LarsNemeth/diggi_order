import React, { useContext } from 'react';
import ItemsOpenOrder from './ItemsOpenOrder';
import UserOpenOrder from './UserOpenOrder';

const OpenOrders = ({ products }) => {
  return (
    <div className="open-order-container">
      <UserOpenOrder />
      <ItemsOpenOrder />
    </div>
  );
};

export default OpenOrders;
