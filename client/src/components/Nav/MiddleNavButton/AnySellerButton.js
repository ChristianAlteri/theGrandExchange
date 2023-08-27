import React, { useState } from 'react';
import AnySellerBar from './BarComponents/AnySellerBar.js';


const AnySellerButton = () => {

    const [isSellerOpen, setIsSellerOpen] = useState(false);

    const handleSellerToggle = () => {
        setIsSellerOpen(!isSellerOpen);
    };

    return (
        <>
            {/* Any seller */}
            <div className="
                text-sm
                font-semibold
                flex
                items-center
                justify-between
                border-l
                pl-6
                
            ">
                <div
                    className="cursor-pointer"
                    onClick={handleSellerToggle}
                >
                    Any Seller 
                </div>
                {isSellerOpen && (
                    <div className="mt-1">
                        <AnySellerBar />
                    </div>
                )}
             </div>
        </>
    );
}

export default AnySellerButton;
