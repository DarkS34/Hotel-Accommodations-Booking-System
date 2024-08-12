const cloudinary = require("cloudinary").v2;

const deleteFile = (url) => {
  cloudinary.uploader.destroy(
    url.split("/").at(-2) + "/" + url.split("/").at(-1).split(".")[0]
  );
};

module.exports = { deleteFile };
