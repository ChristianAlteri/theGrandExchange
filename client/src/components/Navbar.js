import React, { useState } from 'react';
import { CiMenuBurger, CiUser } from "react-icons/ci";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return ( 
        <div className="
            flex 
            justify-between 
            items-center 
            p-4"
        >
            <div className="
                text-lg 
                font-semibold 
                hover:text-blue-500 
                transition" 
                    onClick={() => console.log('Logo clicked!')} 
                >
                Logo here 
            </div>
            <div className="
                text-lg 
                font-semibold 
                hover:text-blue-500 
                transition
                border 
                border-black-800 
                p-2
                rounded-lg
                " 
                    onClick={() => console.log('Middle button clicked!')} 
                >
                Switch up
            </div>
            <div 
                onClick={toggleOpen}
                className="
                p-4
                md:py-1
                md:px-2
                border-[1px]
                border-neutral-200
                flex
                flex-row
                items-center
                gap-3
                rounded-full
                cursor-pointer
                hover:shadow-md
                transition
                "
            >
                <CiMenuBurger className=" h-5 w-6" />
                <CiUser className=" h-5 w-6" />
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
