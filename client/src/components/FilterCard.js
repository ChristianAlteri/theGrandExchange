import React from 'react';
import { AiOutlineClose } from "react-icons/ai";

const FilterCard = ({ onClose }) => {
    return (
        <div className="
            fixed 
            top-0 
            left-0 
            w-full 
            h-full 
            flex 
            justify-center 
            items-center 


        ">
            <div className="
                bg-white 
                rounded-lg 

                p-11 

                flex 
                flex-col 
                relative
            ">
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
                    bg-white  
                    flex 
                    flex-col 
                    justify-between 
                    h-64 
                    w-64 
                    m-4 
                    p-4 
                    rounded-lg 
                    overflow-hidden 
                ">
                    <h1 className='font-bold mb-3 '> Filter menu</h1>
                    <div className="text-sm" onClick={() => console.log("filter option")}>
                        Item 1
                    </div>
                    <div className="text-sm" onClick={() => console.log("filter option")}>
                        Item 2
                    </div>
                    <div className="text-sm" onClick={() => console.log("filter option")}>
                        Item 3
                    </div>
                    <div className="text-sm" onClick={() => console.log("filter option")}>
                        Item 4
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterCard;
