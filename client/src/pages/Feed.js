import React from 'react';
import ProductCard from '../components/Feed/ProductCard';
import { QUERY_ALL_PRODUCTS } from '../utils/queries';
import { useQuery } from '@apollo/client';

const Feed = () => {
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);

  if (!data) {
    return <p>Loading...</p>;
  }

// console.log(data);

  return (
    <div className="p-8"> 
      <div className="flex flex-wrap">
        {data.getAllProducts.map(product => (
          <ProductCard 
            key={product._id} 
            product={product} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
