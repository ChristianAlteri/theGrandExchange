import React from 'react';
import { IoManOutline, IoWomanOutline } from 'react-icons/io5';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS_BY_CATEGORY_ID } from '../../utils/queries'; // Define this query

const GenderButton = () => {
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS_BY_CATEGORY_ID)


  const handleGenderChange = (categoryId) => {
    // Use the useQuery hook to fetch data based on the categoryId
    console.log("categoryId", categoryId);
    if (loading) {

      console.log('Loading...');
      return;
    }

    // this is not 
    console.log(data); 
  };


  return (
    <>
      <div
        className="hover:cursor-pointer"
        style={{ fontSize: '30px' }}
        onClick={() => handleGenderChange("64e7357834434387b5a02ad0")}
      >
        <IoManOutline />
      </div>
      
      <div
        className="hover:cursor-pointer"
        style={{ fontSize: '30px' }}
        onClick={() => handleGenderChange('64e7357834434387b5a02ad1')}
      >
        <IoWomanOutline />
      </div>
    </>
  );
};

export default GenderButton;
