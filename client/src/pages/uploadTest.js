import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_IMAGE } from '../utils/mutations'; // Make sure to provide the correct path




const UploadTest = () => {
  const [fileInput, setFileInput] = useState(null);
  const [previewSource, setPreviewSource] = useState(null);

  const [addImage] = useMutation(ADD_IMAGE);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileInput(file);
      previewFile(file);
    }
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = async (e) => {
    e.preventDefault();
    if (!previewSource) return;

    
    

    const input = {
        name: "John",
        user_id: "64e7352a9e81c04fda893581", 
        description: "John stuff",
        image: '...', 
        price: "77",
        category: "64e7357834434387b5a02ad1",
    }
    console.log("entering handleSubmitFile:", fileInput);
    // console.log("input for handleSubmitFile:", input);
    
    try {

      const { data } = await addImage({input});
      console.log("passing this input to addImage:", data);
    } catch (error) {

      console.error("Error creating product:", error);
    }

    setFileInput(null);
    setPreviewSource(null);
  };

  return (
    <div className="p-4">
      <input
        type="file"
        name="image"
        onChange={handleFileChange}
        className="mb-4"
      />
      <button
        type="button"
        onClick={handleSubmitFile}
        className={`px-4 py-2 rounded ${
          previewSource ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'
        }`}
        disabled={!previewSource}
      >
        Submit
      </button>
      {previewSource && (
        <img
          src={previewSource}
          alt="coolest-ever"
          className="mt-4"
          style={{ height: '300px', width: '300px' }}
        />
      )}
    </div>
  );
};

export default UploadTest;
