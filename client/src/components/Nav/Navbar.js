import React from 'react';

import sitelogo from '../../assets/sitelogo.svg'

// import AnyBrandButton from './MiddleNavButton/AnyBrandButton';
// import AnySellerButton from './MiddleNavButton/AnySellerButton';
import HamburgerMenuNav from './HamburgerMenuNav';
import { useNavigate } from 'react-router-dom';
import SellWithUs from './SellWithUs';


const Navbar = () => {
 
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/feed');
    };

    
    return (
        <div className="
        flex 
        justify-between 
        items-center 
        p-4
        bg-blue 
        custom-font"
        >
            {/* Logo div */}
            <div className="
                text-lg 
                font-semibold 
                hover:cursor-pointer
                transition" 
                onClick={(handleLogoClick)} 
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
            <div className='flex sell-btn'>
                <SellWithUs />
                    </div>
                {/* Sell with us button  */}
                {/* Login button */}
                <HamburgerMenuNav />
            </div>
        </div>
    );
}

export default Navbar;
