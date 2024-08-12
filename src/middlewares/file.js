const cloudinary = require("cloudinary").v2;
const multer = require("multer");

const { CloudinaryStorage } = require("multer-storage-cloudinary");

const upload = (folderName) => {
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: folderName,
      allowedFormats: ["jpg", "jpeg", "png", "gif", "webp"],
    },
  });

  return multer({ storage });
};

module.exports = upload;
