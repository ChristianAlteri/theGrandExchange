import React, { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { QUERY_ALL_PRODUCTS } from '../utils/queries';

import { useQuery } from '@apollo/client';



const Feed = () => {




  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  console.log(data);


    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold underline mb-4">Feed!</h1>
        <div className="flex flex-wrap">
          {/* <ProductCard 
              key={data.product._id}
              _id={data.product._id}
              user_id={data.product.user_id}
              description={data.product.description}
              name={data.product.name}
              image={data.product.image}
              price={data.product.price}
              category={data.product.category}/> */}
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
      </div>
    );
  };
 
export default Feed; 