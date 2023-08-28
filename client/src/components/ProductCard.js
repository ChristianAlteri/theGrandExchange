import React from "react";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ product }) => {
  const {
    _id,
    name,
    user_id,
    description,
    image,
    price,
    category
  } = product;

  return (
    <div className="
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
      "
    onClick={() => console.log(product.name)}
    >
        <div 
            className=" 
            font-semibold
            "
            >
            {name}
        </div>
        <div 
            className="
            text-sm 
            text-gray-600 
            mt-2"
            >
                {description}
            </div>
        <div className="mt-4">
            <img 
                src={image} 
                alt={name} 
                className="w-full h-auto" 
                />
        </div>
        <div 
            className="
            mt-4 
            font-bold 
            text-blue-600
            flex 
            justify-between 
            items-center
            "
            >   
                ${price}

            <AddToCartButton product={product} />

        </div>
        
    </div>
  );
};

export default ProductCard;
