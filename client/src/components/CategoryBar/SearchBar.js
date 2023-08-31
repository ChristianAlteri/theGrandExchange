import React, { useState } from "react";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        // Implement your search logic here using the searchQuery state
        console.log("Searching for:", searchQuery);
    };

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="flex">
            <form onSubmit={handleSearch} className="flex">
                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-r p-2"
                >
                   Search
                </button>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 focus:outline-none ml-2 mr-4"
                />
            </form>
        </div>
    );
    }    

export default SearchBar;
