import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { CiMenuBurger, CiUser } from "react-icons/ci";
import Auth from '../../utils/auth';

const HamburgerMenuNav = () => {


  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate(); 

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleLoginClick = () => {
    if (Auth.loggedIn()) {
      // Logout logic here
      Auth.logout();
    } else {
      navigate('/login');
    }
  };
  const handleSignupClick = () => {
    navigate('/signup'); 
  };

  

  return (
    <div
      onClick={toggleOpen}
      className="
        user-menu
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
        bg-white
      "
    >
    
      <CiMenuBurger className="h-5 w-6" />
      <CiUser className="h-5 w-6" />

      {isOpen && (
        <div
          className="
            absolute 
            rounded-xl 
            shadow-md 
            w-1/6 
            bg-white 
            overflow-hidden 
            right-0 
            top-14
            text-sm
            user-menu-open
          "
        >

          <div
            className="
              flex 
              flex-col 
              cursor-pointer 
              p-2 
              hover:bg-gray-100
            "
            onClick={handleLoginClick}
          >
          {Auth.loggedIn() ? 'Logout' : 'Login'}
          </div>
          <div
            className="
              flex 
              flex-col 
              cursor-pointer 
              p-2 
              hover:bg-gray-100
            "
            onClick={handleSignupClick}
          >
            Signup
          </div>
          
        </div>
      )}
    </div>
  );
};

export default HamburgerMenuNav;
