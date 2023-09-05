import React, { useState } from 'react';
import GenderButton from './GenderButton';

const CategoryBar = () => {
  const [showModal, setShowModal] = useState(false);

  // const toggleModal = () => {
  //   setShowModal(!showModal);
  // };

  const categoryData = [
    { tag: 'skirts' },
    { tag: 'tops' },
    { tag: 'minis' },
    { tag: 'jeans' },
    { tag: 'blouse' },
    { tag: 'jacket' },
    { tag: 'hoodies' },
    { tag: 'crops' },
    { tag: 'tanks' },
    { tag: 'watches' },
    { tag: 'bags' },
  ];

  return (
    <div className='w-full category-bar'>
      <div className='p-4 border-t'>
        <div className='flex justify-between'>
          <div className='flex'>
            <GenderButton />
          </div>
          {categoryData.map((category, index) => (
            <div
              key={index}
              className='hover:cursor-pointer flex items-center flex'
              onClick={() => console.log('category clicked')}
            >
              <p className='category-title'>{category.tag}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;
