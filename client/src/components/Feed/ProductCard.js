import React, { useState } from "react";
import { Image } from "cloudinary-react";
import AddToCartButton from "../AddToCartButton";



const ProductCard = ({ product }) => {
  const { name, image, price, } = product;

  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

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
        productCard"
      onClick={handleClick}
    >
      
        <>
          <div className="font-semibold">{name}</div>
          <div className="mt-4 font-bold text-blue-600 flex justify-between items-center">
            ${price}
            <AddToCartButton product={product} />
          </div>
          <div className="mt-4">
            <Image
              cloudName="dqpfur9e1"
              publicId={image}
              alt={name}
              width="100%"
              height="auto"
            />
          </div>
        </>
    </div>
  );
};

export default ProductCard;


