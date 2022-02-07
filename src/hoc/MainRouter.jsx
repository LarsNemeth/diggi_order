import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import OpenOrders from '../pages/OpenOrders';
import OrderTables from '../pages/OrderTables';

export const ProductContext = createContext();

export default function MainRouter() {
  const [products, setProducts] = useState([]);
  const [checkout, setCheckout] = useState([]);

  // useEffect(() => {
  //   const storeProducts = JSON.parse(localStorage.getItem('storeProducts'));
  //   if (storeProducts) setProducts(storeProducts);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('storeProducts', JSON.stringify(products));
  // }, [products]);
  console.log('This is my sec. checkot', checkout);

  const onClickButton = (item) => {
    if (item) {
      setCheckout(item);
    }
  };

  return (
    <div className="main-component">
      <BrowserRouter>
        <ProductContext.Provider
          value={[products, setProducts, onClickButton, checkout]}
        >
          <Routes>
            <Route path="/openorders" element={<OpenOrders />} />
            <Route path="/" element={<OrderTables />} />
          </Routes>
        </ProductContext.Provider>
      </BrowserRouter>
    </div>
  );
}
