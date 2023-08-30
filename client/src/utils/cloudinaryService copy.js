// Import statement
import cloudinary from "cloudinary-core";

// Initialize the cloudinary object
const cl = cloudinary.Cloudinary.new({ cloud_name: "dqpfur9e1" });
console.log("New cloudinary instance", cl);
export const openUploadWidget = () => {
  cl.openUploadWidget(
    {
      sources: ["local", "url", "camera", "facebook", "instagram"],
      upload_preset: "ml_default",
    },
    (error, result) => {
        
      if (!error && result && result.event === "success") {
        // Handle successful upload here
        handleUpload(result.info);
        console.log(error);
      }
    }
  );
};

// Callback function to handle successful upload
const handleUpload = (info) => {
  // Process the uploaded media information here
  console.log("Uploaded media info:", info);
};
