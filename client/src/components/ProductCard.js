import React from "react";

const ProductCard = ({ product }) => {
  const {
    // _id,
    name,
    // user_id,
    description,
    image,
    price,
    // category
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
            text-lg 
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
            text-lg 
            font-bold 
            text-blue-600
            flex 
            justify-between 
            items-center
            "
            >   
                ${price}
        <button 
                className="
                bg-gray-100 
                text-blue 
                py-1
                px-1
                rounded-md 
                shadow-md
                text-sm
                "
            
            onClick={() => console.log("Apply add to cart")}
            >
                Buy now
            </button>
        </div>
        
    </div>
  );
};

export default ProductCard;
