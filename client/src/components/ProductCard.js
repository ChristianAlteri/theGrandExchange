import React from "react";

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
      overflow-hidden"
    >
      <div className="text-lg font-semibold">{name}</div>
      <div className="text-sm text-gray-600 mt-2">{description}</div>
      <div className="mt-4">
        <img src={image} alt={name} className="w-full h-auto" />
      </div>
      <div className="mt-4 text-lg font-bold text-blue-600">${price}</div>
    </div>
  );
};

export default ProductCard;
