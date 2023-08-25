import React, { useState } from 'react';
import FilterCard from './FilterCard';

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
            md:flex-row 
            sm:flex-row 
            lg:flex-row 
            xl:flex-row 
            flex-col 
            md:items-center
        ">
            <div className="
                flex 
                flex-row 
                space-x-2
            ">
                <div className="text-gray-500 text-sm">
                    icon
                </div>
                <div className="text-gray-500 text-sm">
                    icon
                </div>
                <div className="text-gray-500 text-sm">
                    icon
                </div>
                <div className="text-gray-500 text-sm">
                    icon
                </div>
                <div className="text-gray-500 text-sm">
                    icon
                </div>
                <div className="text-gray-500 text-sm">
                    icon
                </div>
            </div>

            <button
                className="
                    text-xl 
                    rounded-lg 
                    border 
                    border-gray-300 
                    shadow 
                    px-3 
                    py-1
                "
                onClick={toggleModal}
            >
                Filter
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
