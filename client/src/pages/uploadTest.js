import React, { useState } from 'react';
import { useMutation } from '@apollo/client'; // Import from your actual Apollo client library
import { ADD_IMAGE } from '../utils/mutations'; // Import your mutation from the correct path
import cloudinary from 'cloudinary';

const UploadTest = () => {
  const [fileInput, setFileInput] = useState(null); // Initialize with null
  const [previewSource, setPreviewSource] = useState(null);

  const [addImage] = useMutation(ADD_IMAGE); // Hook for the GraphQL mutation

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
    await uploadImage();
  };

  const uploadImage = async () => {
    console.log("uploadImage function reached");

    try {
      const imgUpload = await cloudinary.uploader.upload(previewSource); // Upload the preview image
      console.log("image uploaded data: ", imgUpload);

      const input = {
        name: "John",
        user_id: "64e7352a9e81c04fda893581", // Replace with session.id
        description: "John stuff",
        image: imgUpload.secure_url,
        price: "77",
        category: "64e7357834434387b5a02ad1",
      };

      const { data } = await addImage({ variables: { input } });
      console.log("Created order:", data);
    } catch (error) {
      if (error.networkError) {
        console.error("Network error:", error.networkError);
      } else if (error.graphQLErrors) {
        console.error("GraphQL errors:", error.graphQLErrors);
      } else {
        console.error("Other error:", error);
      }
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
