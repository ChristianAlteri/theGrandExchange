import React from 'react';

import sitelogo from '../Assets/sitelogo.svg';

import AnyBrandButton from './MiddleNavButton/AnyBrandButton';
import AnySellerButton from './MiddleNavButton/AnySellerButton';
import HamburgerMenuNav from './HamburgerMenuNav';


const Navbar = () => {
 
    
    return (
        <div className="
        flex 
        justify-between 
        items-center 
        p-4
        bg-blue"
        >
            {/* Logo div */}
            <div className="
                text-lg 
                font-semibold 
                hover:text-blue-500 
                transition" 
                onClick={() => console.log('Logo clicked!')} 
            >
                <img src={sitelogo} alt="logo" />
            </div>
                    {/* Middle button */}
                    <div 
                        className="
                        flex
                        flex-row
                        justify-center
                        items-center
                        space-x-6

                        ">
                        <AnyBrandButton />
                        <AnySellerButton />
                    </div>
                {/* Login button */}
                <HamburgerMenuNav />
        </div>
    );
}

export default Navbar;
