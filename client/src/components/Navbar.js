import React, { useState } from 'react';
import { CiMenuBurger, CiUser } from "react-icons/ci";
import AnyBrandBar from './AnyBrandBar';
import sitelogo from './assets/sitelogo.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isBrandOpen, setIsBrandOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    
    const handleBrandToggle = () => {
        setIsBrandOpen(!isBrandOpen);
    }

    return ( 
        <div className="
        flex 
        justify-between 
        items-center 
        p-4
        bg-blue"
    >
        <div className="
            text-lg 
            font-semibold 
            hover:text-blue-500 
            transition" 
                onClick={() => console.log('Logo clicked!')} 
            >
            <Link to="/home"> <img src={sitelogo} alt="logo" /> </Link>
        </div>
        <div className="
            flex
            flex-row
            justify-center
            items-center
            space-x-6

        ">
            <div className="
                text-sm
                font-semibold
                flex
                items-center
                justify-center
                ">
                <div
                    className="cursor-pointer"
                    onClick={handleBrandToggle}
                >
                    Any Brand 
                </div>
                {isOpen && (
                    <div className="mt-1">
                        <AnyBrandBar />
                    </div>
                )}
                </div>
            <div className="
                text-sm
                font-semibold
                flex
                items-center
                justify-center
                border-l
                pl-6
            ">
                Any Seller
            </div>   
        </div>
        <div 
            onClick={toggleOpen}
            className="
            p-4
            md:py-1
            sm:py-2
            md:px-2
            border-[1px]
            border-neutral-200
            flex
            items-center
            gap-3
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
            "
        >
            <CiMenuBurger className="h-5 w-6" />
            <CiUser className="h-5 w-6" />
        </div>
        {isOpen && (
            <div className="
                absolute 
                rounded-xl 
                shadow-md 
                w-1/6 
                bg-white 
                overflow-hidden 
                right-0 
                top-14
                text-sm
            "
            > 
           
                <div className="
                    flex 
                    flex-col 
                    cursor-pointer 
                    p-2 
                    hover:bg-gray-100

                    "
                    onClick={() => console.log('Login button clicked!')}
                    >
                        <Link to="/login">Login</Link>
                </div>
                <div className="
                    flex 
                    flex-col 
                    cursor-pointer 
                    p-2 
                    hover:bg-gray-100

                    "
                    onClick={() => console.log('Sign up button clicked!')}
                    >
                    <Link to="/signup">Sign up</Link>
                </div>
                <div className="
                    flex 
                    flex-col 
                    cursor-pointer 
                    p-2 
                    hover:bg-gray-100
                    border-t
                    "
                    onClick={() => console.log('Sell with us up button clicked!')}
                    >
                        Sell with us
                </div>
            </div>
            )}
        </div>
     );
}
 
export default Navbar;

