import React, { useState } from 'react';
import { CiMenuBurger, CiUser } from "react-icons/ci";

import sitelogo from '../Assets/sitelogo.svg';

import AnyBrandButton from './MiddleNavButton/AnyBrandButton';
import AnySellerButton from './MiddleNavButton/AnySellerButton';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    ;

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    

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
                {/* Open login button */}
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
                            Login
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
                            Signup
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
