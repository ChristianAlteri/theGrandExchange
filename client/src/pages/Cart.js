import React from 'react';
import { QUERY_ORDERS_FROM_LOGGED_IN_USER } from '../utils/queries';
import { useQuery } from '@apollo/client';
import CartContainer from '../components/Footer/Cart/CartContainer'; // Update the import path if needed
import Navbar from '../components/Nav/Navbar';

const Cart = () => {
  const userId = "64f198db782dabbbe7e0deaf";

  // Define the query options with variables
  const { loading, data } = useQuery(QUERY_ORDERS_FROM_LOGGED_IN_USER, {
    variables: {
      userId: userId, // Pass the userId in the variables object
    },
  });

  if (!data) {
    return <p>Loading...</p>;
  }

  console.log("Data:", data);
  const allOrders = data.getOrdersByUserId;

  return (
    <>
      <CartContainer orders={allOrders} />
    </>
  );
};

export default Cart;
