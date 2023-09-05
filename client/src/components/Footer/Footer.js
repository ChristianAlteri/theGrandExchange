import React, { useState } from "react";
import CartIcon from "./Cart/CartIcon";
import SearchBar from "../CategoryBar/SearchBar";
import { CiSearch } from "react-icons/ci";



const Footer = () => {
    const [searchBarOpen, setSearchBarOpen] = useState(false);

    const toggleSearchBar = () => {
        setSearchBarOpen(!searchBarOpen);
    };

    return (
        <div className="fixed bottom-0 w-full bg-gray-200 p-4 flex justify-end footer">
          {/* <div className="flex justify">
           <a href="github">CONTRIBUTE</a>
          </div> */}
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
