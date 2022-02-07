import React from 'react';

const ItemOpenOrder = ({ event }) => {
  return (
    <div>
      <span>{event.name}</span>
      <img src={event.img} alt="" />
    </div>
  );
};

export default ItemOpenOrder;
