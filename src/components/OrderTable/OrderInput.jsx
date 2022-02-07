import React, { useState, useContext } from 'react';
import { ProductContext } from '../../hoc/MainRouter';

import { productList } from '../../data';

const FormInput = () => {
  const [products, setProducts] = useContext(ProductContext);
  const [productName, setProductName] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setProducts([...products, { name: productName, complete: true }]);
    console.log('my product: ', productName);
    console.log('was ist das', products);
  };

  return (
    <div>
      <form
        autoComplete="off"
        className="form-container"
        onSubmit={onSubmitHandler}
      >
        <label for="cars">Products:</label>
        <select
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        >
          {productList.map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.text}
              </option>
            );
          })}
        </select>

        <button type="submit" onChange={(e) => setProductName(e.target.value)}>
          Add To Cart
        </button>
      </form>
    </div>
  );
};

export default FormInput;
