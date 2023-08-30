import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT } from "../utils/mutations";
import { Image } from "cloudinary-react"; // Import Cloudinary Image component
import createUploadWidget from "../utils/cloudinaryService";


const SellWithUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    user_id: "64e7352a9e81c04fda893581",
    description: "",
    image: "", // Store the Cloudinary image URL here
    price: "",
    category: "",
  });



  const [createProduct] = useMutation(CREATE_PRODUCT);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = () => {
    console.log("HEEEERRRRRREEEEE");

    createUploadWidget((error, result) => {
      if (!error && result && result.event === "success") {
        setFormData({
          ...formData,
          image: result.info.secure_url, // Set the Cloudinary image URL
        });
      }
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const input = {
      name: formData.name,
      user_id: "64e7352a9e81c04fda893581", // hard coded change to session.id
      description: formData.description,
      image: formData.image,
      price: parseFloat(formData.price),
      category: formData.category,
    };

    try {
      const { data } = await createProduct({
        variables: { input },
      });
      console.log("Product created:", data);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-96 p-4 border rounded-lg shadow-lg"
      >
        {[
          { label: "Name:", name: "name", type: "text" },
          { label: "Description:", name: "description", type: "text" },
          { label: "Image:", name: "image", type: "file" }, // Change type to "file"
          { label: "Price:", name: "price", type: "number" },
        ].map((inputField, index) => (
          <div className="mb-4" key={index}>
            <label htmlFor={inputField.name}>{inputField.label}</label>
            {inputField.type === "text" ? (
              <input
                className="w-full p-2 border rounded"
                name={inputField.name}
                type={inputField.type}
                id={inputField.name}
                value={formData[inputField.name]}
                onChange={handleChange}
              />
            ) : inputField.type === "file" ? (
              <div>
                <input
                  className="w-full p-2 border rounded"
                  name={inputField.name}
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageUpload} 
                />
               {formData.image && (
                  <Image
                    cloudName="dqpfur9e1"
                    publicId={formData.image}
                    width="100"
                    crop="scale"
                  />
                )} 
              </div>
            ) : (
              <input
                className="w-full p-2 border rounded"
                name={inputField.name}
                type={inputField.type}
                id={inputField.name}
                value={formData[inputField.name]}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
        <div className="mb-4">
          <label htmlFor="category">Category:</label>
          <select
            className="w-full p-2 border rounded"
            name="category"
            id="category"
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            <option value="64e7357834434387b5a02ad0">Man</option>
            <option value="64e7357834434387b5a02ad1">Woman</option>
          </select>
        </div>
        <div className="text-center">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            type="submit"
          >
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default SellWithUs;
