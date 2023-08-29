import React, { useState } from 'react';
import { IoImagesOutline } from 'react-icons/io5';
import GenderButton from './GenderButton';

const CategoryBar = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
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
        <div className='w-full '>
            <div className="p-4 border-t">
                <div className="flex  justify-between">
            <div className='flex'><GenderButton /> </div>
                    {categoryData.map((category, index) => (
                        <div
                            key={index}
                            className="
                                hover:cursor-pointer
                                flex
                                items-center
                            "
                            onClick={() => console.log('category clicked')}
                        >
                            <category.icon />
                            {category.tag}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryBar;
