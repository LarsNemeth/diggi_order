import React, { useContext, useState } from 'react';
import { ProductContext } from '../../hoc/MainRouter';
import { useNavigate } from 'react-router-dom';

const OrderFooter = () => {
  const [checkAll, setCheckAll] = useState(false);
  const [products, setProducts, onClickButton] = useContext(ProductContext);
  const navigate = useNavigate();

  const handleCheckAll = () => {
    const newProducts = [...products];
    newProducts.forEach((product) => {
      product.complete = !checkAll;
    });
    setProducts(newProducts);
    setCheckAll(!checkAll);
  };

  //* Delete Button

  const deleteProducts = () => {
    const newProducts = products.filter((product) => {
      return product.complete === false;
    });
    setProducts(newProducts);
    setCheckAll(false);
  };

  //* Checkout Button - Transfer To OpenOrders
  const checkoutButton = (e) => {
    e.preventDefault();

    navigate('/openorders', { replace: true });
  };
  // *************** */

  return (
    <div className="row">
      <div className="button-wrapper">
        <div className="delete-button">
          <label htmlFor="all">
            <input
              type="checkbox"
              name="all"
              id="all"
              onClick={handleCheckAll}
              checked={checkAll}
            />
            All
          </label>
          <p>Delete all Products from Cart</p>
          <button id="delete" onClick={deleteProducts}>
            Delete
          </button>
        </div>
        <div className="checkout-button">
          <p>You have {products.length} Products on Your List</p>
          <button id="checkout" onClick={checkoutButton}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderFooter;
