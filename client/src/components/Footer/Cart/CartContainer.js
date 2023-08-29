import React from 'react';
import CartItem from '../Cart/CarItem'; // Update the import path if needed

const CartContainer = ({ orders }) => {
  return (
    <div className="p-8">
      <div className="flex flex-wrap">
        {orders.map(order => (
          <div key={order._id}>
            {order.products.map(product => (
              <CartItem key={product._id} product={product} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartContainer;
