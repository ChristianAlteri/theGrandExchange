import React, { useState } from 'react';
import FilterCard from './FilterCard';
import { CiBoxList } from 'react-icons/ci';
import { IoImagesOutline } from "react-icons/io5";


const CategoryBar = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="
            flex 
            
            justify-between 
            items-center 
            p-4 
            border-t
        ">
            <div className="
                flex 
                space-x-2
            ">
                <div className="
                    text-gray-500 
                    text-sm
                    hover:cursor-pointer
                    flex
                    items-center
                "
                    onClick={() => console.log("category clicked")}
                    >
                    <IoImagesOutline />
                        skirts
                    </div>
                    <div className="
                    text-gray-500 
                    text-sm
                    hover:cursor-pointer
                    flex
                    items-center
                "
                    onClick={() => console.log("category clicked")}
                    >
                    <IoImagesOutline />
                        tops
                    </div>
                    <div className="
                    text-gray-500 
                    text-sm
                    hover:cursor-pointer
                    flex
                    items-center
                "
                    onClick={() => console.log("category clicked")}
                    >
                    <IoImagesOutline />
                        minis
                    </div>
                    <div className="
                    text-gray-500 
                    text-sm
                    hover:cursor-pointer
                    flex
                    items-center
                "
                    onClick={() => console.log("category clicked")}
                    >
                    <IoImagesOutline />
                        jeans
                    </div>
                    <div className="
                    text-gray-500 
                    text-sm
                    hover:cursor-pointer
                    flex
                    items-center
                "
                    onClick={() => console.log("category clicked")}
                    >
                    <IoImagesOutline />
                        blouse
                    </div>
                    <div className="
                    text-gray-500 
                    text-sm
                    hover:cursor-pointer
                    flex
                    items-center
                "
                    onClick={() => console.log("category clicked")}
                    > 
                    <IoImagesOutline />
                        jacket
                    </div>
                
            </div>

            <button
                className="
                    text-l 
                    rounded-lg 
                    border 
                    border-gray-300 
                    px-3 
                    py-2
                    flex
                    items-center 
                    justify-between 
                "
                onClick={toggleModal}
            >
                <CiBoxList className=" h-6 w-6 mr-1 " /> 
                <span className="ml-1">Filter</span> 
            </button>


            {showModal && (
                <div className="
                    fixed 
                    inset-0 
                    flex 
                    items-center 
                    justify-center 
                    z-50"
                >
                    <div className="
                        absolute 
                        inset-0 
                        bg-gray-900 
                        opacity-50"
                        onClick={toggleModal}
                    />
                    <FilterCard onClose={toggleModal} />
                </div>
            )}
        </div>
    );
};

export default CategoryBar;
