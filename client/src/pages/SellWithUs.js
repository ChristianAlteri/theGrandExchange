import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_IMAGE, CREATE_PRODUCT } from "../utils/mutations";
import UploadWidget from "../components/UploadWidget/UploadWidget";


const SellWithUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    user_id: "64e7352a9e81c04fda893581",
    description: "",
    image: "",
    price: "",
    category: "",
  });

  const [url, updateUrl] = useState(null);
  const [error, updateError] = useState(null);

  const [addImage] = useMutation(ADD_IMAGE);
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnUpload = async (error, result, widget) => {
    if (error) {
      updateError(error);
      widget.close({ quiet: true });
      return;
    }
    updateUrl(result?.info?.secure_url);

    try {
      const { data } = await addImage({
        input: { url: result?.info?.secure_url },
      });
      console.log("passing this input to addImage:", data);
    } catch (error) {
      console.error("Error creating product image:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const input = {
      name: formData.name,
      user_id: "64e7352a9e81c04fda893581",
      description: formData.description,
      image: url,
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
    <div className="flex justify-center p-40">
      <form
        onSubmit={handleSubmit}
        className=" p-10 border rounded-lg shadow-lg sell-form"
      >
        <div className="mb-4">
          <label htmlFor="name">Name:</label>
          <input
            className="w-full p-2 border rounded"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description">Description:</label>
          <input
            className="w-full p-2 border"
            name="description"
            type="text"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block">
            Image:
          </label>
          <div className="w-full p-2 border rounded">
            <UploadWidget onUpload={handleOnUpload}></UploadWidget>
            {error && <p className="text-red-500">{error}</p>}
            {url && (
              <div className="mt-2">
                <img
                  className="max-w-xs max-h-xs"
                  src={url}
                  alt="Uploaded resource"
                />
              </div>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="price">Price:</label>
          <input
            className="w-full p-2 border rounded"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category">Category:</label>
          <select
            className="w-full p-2 border rounded"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            {/* code the category id's */}
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
