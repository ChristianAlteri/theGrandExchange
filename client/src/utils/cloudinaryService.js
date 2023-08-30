// Import statement
import cloudinary from "cloudinary-core";

// Create the Cloudinary upload widget
const createUploadWidget = (callback) => {
  const myWidget = cloudinary.createUploadWidget(
    {
      cloudName: "dqpfur9e1",
      uploadPreset: "ml_default",
    },
    callback
  );

  // Open the Cloudinary upload widget
  myWidget.open();
};

export default createUploadWidget;
