import React from 'react';
import { QUERY_ORDERS } from '../utils/queries';
import { useQuery } from '@apollo/client';
import CartItem from '../components/Footer/Cart/CarItem';

const Cart = () => {
    const { loading, data } = useQuery(QUERY_ORDERS);
    
    if (loading) {
      return <p>Loading...</p>;
    }
  
    const allOrders = data.getAllOrders;
  
    return (
      <div className="p-8">
        <div className="flex flex-wrap">
          {allOrders.map(order => (
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
  

export default Cart;