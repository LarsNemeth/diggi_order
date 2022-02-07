import React, { useContext } from 'react';
import { ProductContext } from '../../hoc/MainRouter';

import ItemOpenOrder from './ItemOpenOrder';

const ItemsOpenOrder = () => {
  const [products] = useContext(ProductContext);

  return (
    <div className="open-orders-container">
      <div className="open-orders-h1">
        <h2>Offene Bestellungen</h2>
        <span>see all</span>
      </div>
      <div className="items-container">
        <h3>
          {products
            ? products.map((event) => <ItemOpenOrder event={event} />)
            : 'no button works'}
        </h3>
      </div>
    </div>
  );
};

export default ItemsOpenOrder;
