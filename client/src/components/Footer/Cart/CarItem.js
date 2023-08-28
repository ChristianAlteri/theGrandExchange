import React from "react";
import { QUERY_PRODUCTS_BY_IDS } from "../../../utils/queries";
import { useQuery } from "@apollo/client";
import { AiOutlineClose } from "react-icons/ai";

const CartItem = ({ product }) => {

  const { _id, name } = product;

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
          overflow-hidden"
          
    >
          <div className="ml-auto hover:cursor-pointer"  onClick={() => console.log("Delete from cart")}> <AiOutlineClose /></div>
          <div className="font-semibold hover:cursor-pointer" onClick={() => console.log(name + " Clicked")}>{name}</div>
    </div>
  );
};

export default CartItem;
