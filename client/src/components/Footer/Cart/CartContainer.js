import React, { useState, useEffect } from "react";
import CartItem from '../Cart/CarItem'; 


const CartContainer = ({ orders }) => {

  const [cartTotal, setCartTotal] = useState(0); 

  // Calculate the total price of items when orders change
  useEffect(() => {
    // Initialize a variable to store the total price
    let total = 0;

    // Loop through orders and their products to calculate the total
    orders.orders.forEach(order => {
      order.products.forEach(product => {
        total += product.price;
      });
    });

    // Update the cartTotal state
    setCartTotal(total);
  }, [orders]);

  console.log("these are the orders: ", orders.orders);
  return (
    <div className="p-8">
      <div className="flex flex-wrap">
        {orders.orders.map(order => (
          <div key={order._id}>
            {order.products.map(product => (
              <CartItem key={product._id} product={product} />
            ))}
          </div>
        ))}
      </div>
        <div className="border-b">
        Cart total: ${cartTotal.toFixed(2)} 
      </div>
    </div>
  );
};

export default CartContainer;
