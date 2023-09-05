import React from 'react';
import { QUERY_ORDERS_FROM_LOGGED_IN_USER } from '../utils/queries';
import { useQuery } from '@apollo/client';
import CartContainer from '../components/Footer/Cart/CartContainer'; // Update the import path if needed
import Navbar from '../components/Nav/Navbar';

const Cart = () => {
  // const userId = "";
  // Define the query options with variables
  const { data } = useQuery(QUERY_ORDERS_FROM_LOGGED_IN_USER);
  
  console.log("Helllllllooooo", data);
  if (!data) {
    return <p>Loading...</p>;
  }
  
  const orders = data.user


  return (
    <>
      {/* <CartContainer orders={allOrders} /> */}
      <CartContainer  />
    </>
  );
};

export default Cart;
