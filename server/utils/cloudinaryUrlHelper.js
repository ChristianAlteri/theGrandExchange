const cloudinary = require('cloudinary');


function cloudinaryUrlHelper(input, fileInput) {
    
    const input = {
        name: "John",
        user_id: "64e7352a9e81c04fda893581", 
        description: "John stuff",
        image: '...', 
        price: "77",
        category: "64e7357834434387b5a02ad1",
    }
}

exports.module = cloudinaryUrlHelper
