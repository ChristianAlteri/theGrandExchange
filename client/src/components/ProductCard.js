import React from "react";
import { useStoreContext } from "../utils/GlobalState";



const ProductCard = (item) => {
    const [state, dispatch] = useStoreContext();

    const {
        _id,
        name,
        user_id,
        description,
        image,
        price,
        category
    } = item;


    return (

        <>
        <div> {name} </div>
        <div className="
                flex 
                justify-center 
                items-center 
                h-64 
                w-64 
                border 
                border-gray-300 
                m-4"
            >
                Product Card!
            </div>
        </>
    );
  };

  export default ProductCard;