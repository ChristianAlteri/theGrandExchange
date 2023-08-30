import React from 'react';
import { QUERY_ORDERS_WITH_PRODUCTS } from '../utils/queries';
import { useQuery } from '@apollo/client';
import CartContainer from '../components/Footer/Cart/CartContainer'; // Update the import path if needed
import Navbar from '../components/Nav/Navbar';

const Cart = () => {
  const { loading, data } = useQuery(QUERY_ORDERS_WITH_PRODUCTS);

  if (loading) {
    return <p>Loading...</p>;
  }

  const allOrders = data.getAllOrders; 
  console.log("allOrders: ", allOrders);

  return (
    <>
      <Navbar />
      <CartContainer orders={allOrders} />
    </>
  );
};

export default Cart;
