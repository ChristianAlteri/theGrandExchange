import React from 'react';

const FilterCard = ({ onClose }) => {
    return (
        <div className="
            bg-white 
            rounded-lg 
            border 
            border-gray-400 
            shadow 
            p-11
            z-10"
        >
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
                    <div className="text-sm">item</div>
                    <div className="text-sm" >item</div>
                    <div className="text-sm">item</div>
                    <div className="text-sm">item</div>
            </div>
            
            <button
                className="
                text-gray-500
                p-4
                "
                onClick={onClose}
            >
                Close
            </button>
        </div>
    );
};

export default FilterCard;
