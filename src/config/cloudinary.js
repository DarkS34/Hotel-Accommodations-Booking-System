const cloudinary = require("cloudinary").v2;

const connectToCloudinary = () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    console.log("Connected to Cloudinary");
  } catch (error) {
    console.log("Failed to connect to Cloudinary");
    console.error(error);
  }
};

module.exports = { connectToCloudinary };
