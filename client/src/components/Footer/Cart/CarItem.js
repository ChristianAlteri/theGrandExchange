import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Image } from "cloudinary-react";


const CartItem = ({ product }) => {
  const { _id, name, price, image } = product;
  console.log("PODUCt", product);
  console.log("price", product.price);

 


  return (
    <div
      className="
        flex
        items-center
        border-b
        border-gray-300
        p-4"
    >
      <div className="w-16 h-16 border border-gray-300 rounded-lg overflow-hidden">
        <Image
          cloudName="dqpfur9e1"
          publicId={image}
          alt={name}
          width="100%"
          height="100%"
        />
      </div>
      <div className="ml-4 flex-grow">
        <div className="font-semibold">{name}</div>
        {price}
      </div>
      <div className="ml-auto">
        <AiOutlineClose
          className="text-gray-500 hover:cursor-pointer"
          onClick={() => console.log("Delete from cart")}
        />
      </div>
    </div>
  );
};

export default CartItem;
