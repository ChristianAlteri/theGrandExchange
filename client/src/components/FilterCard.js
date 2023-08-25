import React from 'react';
import { AiOutlineClose } from "react-icons/ai";

const FilterCard = ({ onClose }) => {
    return (
        <div className="
        bg-white 
        rounded-lg 
        border 
        border-gray-400 
        shadow 
        p-11
        z-10
        flex
        flex-col
        relative
        "
        >
        <button
            className="
            text-gray-500
            absolute 
            top-0 
            right-0
            mt-1
            mr-1
            p-3
            rounded
            hover:bg-gray-100
            "
            onClick={onClose}
        >
            <AiOutlineClose />
        </button>
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
        text-xl 
        mb-3
        "
    >
        Filter menu
        <div className="
        text-sm
        " 
            onClick={() => console.log("filter option")}
        >
        item
        
        
        </div>
        <div className="text-sm" onClick={() => console.log("filter option")}>item</div>
        <div className="text-sm" onClick={() => console.log("filter option")}>item</div>
        <div className="text-sm" onClick={() => console.log("filter option")}>item</div>
    </div>
</div>

    );
};

export default FilterCard;
