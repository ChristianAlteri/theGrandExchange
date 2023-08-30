import React, { useState } from 'react';
import { IoImagesOutline } from 'react-icons/io5';
import GenderButton from './GenderButton';
import SearchBar from "./SearchBar";
import { CiSearch } from "react-icons/ci";

const CategoryBar = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const [searchBarOpen, setSearchBarOpen] = useState(false);

    const toggleSearchBar = () => {
        setSearchBarOpen(!searchBarOpen);
    };

    const categoryData = [
        { icon: IoImagesOutline, tag: 'skirts' },
        { icon: IoImagesOutline, tag: 'tops' },
        { icon: IoImagesOutline, tag: 'minis' },
        { icon: IoImagesOutline, tag: 'jeans' },
        { icon: IoImagesOutline, tag: 'blouse' },
        { icon: IoImagesOutline, tag: 'jacket' },
        { icon: IoImagesOutline, tag: 'hoodies' },
        { icon: IoImagesOutline, tag: 'crops' },
        { icon: IoImagesOutline, tag: 'tanks' },
        { icon: IoImagesOutline, tag: 'watches' },
        { icon: IoImagesOutline, tag: 'bags' },
    ];

    return (
        <div className='w-full  category-bar'>
            <div className="p-4 border-t">
                <div className="flex justify-between">
                    <div className='flex'><GenderButton /></div>
                    <ul className="flex items-center space-x-4">
                        {categoryData.map((category, index) => (
                            <li
                                key={index}
                                className="
                                    hover:cursor-pointer
                                    flex
                                    items-center
                                "
                                onClick={() => console.log('category clicked')}
                            >
                                <category.icon />
                                <h6>{category.tag}</h6>
                            </li>
                        ))}
                    </ul>
                    <div className="flex">
            {searchBarOpen && <SearchBar />}
                <button 
                className="border p-2"
                onClick={toggleSearchBar}
                >
                    <span style={{ fontSize: '25px' }} >
                    <CiSearch />
                    </span>
                </button>
          </div>
                </div>
                
            </div>
        </div>
    );
                        };

export default CategoryBar;
