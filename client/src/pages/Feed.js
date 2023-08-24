import React from 'react'
import ProductCard from '../components/ProductCard';

const Feed = () => {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold underline mb-4">Feed!</h1>
        <div className="flex flex-wrap">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    );
  };
 
export default Feed; 