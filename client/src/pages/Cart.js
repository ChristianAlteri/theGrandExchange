import React from 'react';
import { QUERY_ORDERS, QUERY_ORDERS_WITH_PRODUCTS } from '../utils/queries';
import { useQuery } from '@apollo/client';
import CartItem from '../components/Footer/Cart/CarItem';
import Navbar from '../components/Nav/Navbar';

const Cart = () => {
    // const { loading, data } = useQuery(QUERY_ORDERS);
    const { loading, data } = useQuery(QUERY_ORDERS_WITH_PRODUCTS);
    
    if (loading) {
        return <p>Loading...</p>;
    }
    
    const allOrders = data.getAllOrders; // Corrected access
    console.log(allOrders);
    
    return (
      <>
        <Navbar />  
        <div className="p-8">
            <div className="flex flex-wrap">
            {allOrders.map(order => (
                <div key={order._id} >
                {order.products.map(product => (
                    <CartItem key={product._id} product={product}/>
                ))}
                </div>
            ))}
            </div>
        </div>
      </>
    );
};
  

export default Cart;