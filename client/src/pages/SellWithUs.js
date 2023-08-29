import React, { useState } from "react";
import { useMutation } from "@apollo/client"; 
import { CREATE_PRODUCT } from "../utils/mutations";

const SellWithUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    user_id: "64e7352a9e81c04fda893581", //hard coded for dev change to logged in user
    description: "",
    image: "",
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create the input object for the mutation
    const input = {
      name: formData.name,
      user_id:  "64e7352a9e81c04fda893581",
      description: formData.description,
      image: formData.image,
      price: parseFloat(formData.price),
      category: formData.category,
    };
    console.log("Input: ", input);
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
      <form onSubmit={handleSubmit} className="w-96 p-4 border rounded-lg shadow-lg">
        {[
          { label: "Name:", name: "name", type: "text" },
          { label: "Description:", name: "description", type: "text" },
          { label: "Image:", name: "image", type: "text" },
          { label: "Price:", name: "price", type: "number" },
        ].map((inputField, index) => (
          <div className="mb-4" key={index}>
            <label htmlFor={inputField.name}>{inputField.label}</label>
            <input
              className="w-full p-2 border rounded"
              name={inputField.name}
              type={inputField.type}
              id={inputField.name}
              onChange={handleChange}
            />
          </div>
        ))}
        {/* Category dropdown */}
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
        {/* Submit button */}
        <div className="text-center">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" type="submit">
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default SellWithUs;
