import React, { useState } from 'react';
import AnyBrandBar from './BarComponents/AnyBrandBar';


const AnyBrandButton = () => {
    const [isBrandOpen, setIsBrandOpen] = useState(false);

    const handleBrandToggle = () => {
        setIsBrandOpen(!isBrandOpen);
    };

    return (
        <>
            {/* Any brand */}
            <div className="
                text-sm
                font-semibold
                flex
                items-center
                justify-between
                
            ">
                <div
                    className="cursor-pointer"
                    onClick={handleBrandToggle}
                >
                    Any Brand 
                </div>
                {isBrandOpen && (
                    <div className="mt-1">
                        <AnyBrandBar />
                    </div>
                )}
            </div> 
            
        </>
    );
}

export default AnyBrandButton;
