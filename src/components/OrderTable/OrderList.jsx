import React, { useContext } from 'react';
import OrderListItem from './OrderListItem';
import { ProductContext } from '../../hoc/MainRouter';

const OrderList = () => {
  const [products, setProducts] = useContext(ProductContext);
  console.log(products);

  const switchComplete = (id) => {
    const newProducts = [...products];
    newProducts.forEach((product, index) => {
      if (index === id) {
        product.complete = !product.complete;
      }
    });
    setProducts(newProducts);
  };

  return (
    <ul className="list-items">
      {products.map((product, index) => (
        <OrderListItem
          product={product}
          key={index}
          id={index}
          checkComplete={switchComplete}
        />
      ))}
    </ul>
  );
};

export default OrderList;
