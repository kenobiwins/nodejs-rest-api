const path = require("path");
const multer = require("multer");

const pathToTemporaryFolder = path.join(__dirname, "../images_tmp");

function generateUniqueSuffix() {
  const timestamp = new Date().getTime(); // Get current timestamp
  const randomNum = Math.floor(Math.random() * 100000); // Generate random number between 0 and 99999
  return `${timestamp}-${randomNum}`; // Concatenate timestamp and random number with a hyphen and return as string
}

const storageConfig = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, pathToTemporaryFolder);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = generateUniqueSuffix();
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
  limits: {
    fileSize: 2048,
  },
});

module.exports = multer({ storage: storageConfig });
