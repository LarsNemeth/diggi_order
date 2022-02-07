import React from 'react';

const OrderListItem = ({ product, id, checkComplete }) => {
  return (
    <li>
      <label htmlFor={id} className={product.complete ? 'active' : ''}>
        <input
          type="checkbox"
          id={id}
          checked={product.complete}
          onChange={() => checkComplete(id)}
        />
        <span>{product.name}</span>
      </label>
    </li>
  );
};

export default OrderListItem;
