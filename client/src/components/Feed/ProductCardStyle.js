import React from "react";
import { Image } from "cloudinary-react";
import AddToCartButton from "../AddToCartButton";
// import ProductDetailsCard from "./ProductDetailsCard";
// import SelectSize from "./SelectSize";

const ProductCardTest = ({ product }) => {
  
  return (
    <div
      className="
        flex 
        flex-col
        justify-between 
        h-64 
        w-64 
        border 
        border-gray-300 
        m-4
        p-4
        rounded-lg
        overflow-hidden
        hover:cursor-pointer
        productCard
        "
    >
      
        <>
          <div className="font-semibold">Product Title</div>
          <div className="mt-4 font-bold text-blue-600 flex justify-between items-center">
            $100
            <AddToCartButton product={product} className="addToCart" />
          </div>
          <div className="mt-4">
            <Image
              cloudName="dqpfur9e1"
              width="100%"
              height="auto"
            />
          </div>
        </>
      
    </div>
  );
};

export default ProductCardTest;


