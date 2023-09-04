import React, { useState } from "react";
import { Image } from "cloudinary-react";
import AddToCartButton from "../AddToCartButton";
import ProductDetailsCard from "./ProductDetailsCard";
import SelectSize from "./SelectSize";

const ProductCard = ({ product }) => {
  const { _id, name, user_id, description, image, price, category } = product;

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
      

      {/* <div className="text-sm text-gray-600 mt-2">{description}</div> */}
    </div>
  );
};

export default ProductCard;


// {showDetails && (
//   <>
//     <ProductDetailsCard product={product} />
//     <div className="mt-4">
//       <Image
//         cloudName="dqpfur9e1"
//         publicId={image}
//         alt={name}
//         width="100%"
//         height="auto"
//       />
//     </div>
    
//   </>
// )}

// {!showDetails && (