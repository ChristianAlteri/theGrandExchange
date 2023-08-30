const cloudinary = require('cloudinary');

async function cloudinaryUrlHelper(fileInput) {
    try {
        const { createReadStream, filename, mimetype } = await fileInput;

        console.log("Data received", filename, mimetype);

        const imgUpload = await cloudinary.uploader.upload(createReadStream(), {
            folder: 'Re-up-folder', // Note: Use 'folder' instead of 'public_id'
            public_id: filename,    // You can use just the filename as public_id
        });

        console.log("Image uploaded", imgUpload);

        const input = {
            name: "John",
            user_id: "64e7352a9e81c04fda893581",
            description: "John's stuff", // Corrected the description
            image: imgUpload.secure_url, // Use secure_url for accessing the uploaded image
            price: "77",
            category: "64e7357834434387b5a02ad1",
        };

        console.log("Final input object", input);

        return input; // Return the constructed input object
    } catch (error) {
        console.error("Error:", error);
        throw error; // Rethrow the error to handle it outside
    }
}

module.exports = cloudinaryUrlHelper; // 'exports', not 'exports.module'
