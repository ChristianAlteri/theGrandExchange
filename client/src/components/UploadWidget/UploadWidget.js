import { useEffect } from "react";

let cloudinary;
let widget;

const UploadWidget = ({ children, onUpload }) => {
  useEffect(() => {
    if (!cloudinary) {
      cloudinary = window.cloudinary;
    }
  }, []);

  function createWidget() {
    const options = {
      cloudName: "dqpfur9e1",
      uploadPreset: "unsigned",
    };

    return cloudinary?.createUploadWidget(options, function (error, result) {
      if (error || result.event === "success") {
        onUpload(error, result, widget);
      }
    });
  }

  function handleOnClick(e) {
    e.preventDefault();
    open();
  }

  function open() {
    console.log("opened");
    if (!widget) {
      widget = createWidget();
    }
    widget && widget.open();
  }

  return (
    <>
      <button onClick={handleOnClick}>Upload an Image</button>
    </>
  );
};

export default UploadWidget;
