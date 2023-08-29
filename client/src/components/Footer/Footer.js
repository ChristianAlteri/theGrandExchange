import React, { useState } from "react";
import CartIcon from "./Cart/CartIcon";
import SearchBar from "./SearchBar";
import { CiSearch } from "react-icons/ci";



const Footer = () => {
    const [searchBarOpen, setSearchBarOpen] = useState(false);

    const toggleSearchBar = () => {
        setSearchBarOpen(!searchBarOpen);
    };

    return (
        <div className="fixed bottom-0 w-full bg-gray-200 p-4 flex justify-end">
          <div className="flex">
            {searchBarOpen && <SearchBar />}
                <button 
                className="border p-1"
                onClick={toggleSearchBar}
                >
                    <span style={{ fontSize: '25px' }} >
                    <CiSearch />
                    </span>
                </button>
          </div>
          <CartIcon/>
        </div>
      );
    }      
 
export default Footer;
