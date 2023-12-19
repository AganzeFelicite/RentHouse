// const express = require("express");
// const cors = require("cors");
// const multer = require("multer");

// const app = express();
// app.use(cors());
// app.use(express.json());

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     return cb(null, "./public/Images");
//   },
//   filename: function (req, file, cb) {
//     return cb(null, `${Date.now()}_${file.originalname}`);
//   },
// });

// const upload = multer({ storage });

// app.post("/upload", upload.single("image"), (req, res) => {
//   console.log(req.body);
//   console.log(req.file);
// });

// app.listen(3001, () => {
//   console.log("Server is running");
// });
const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(express.json());

const singleImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public/Images");
  },
  filename: function (req, file, cb) {
    return cb(null, `${file.originalname}`);
  },
});

const arrayImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public/houseimages");
  },
  filename: function (req, file, cb) {
    return cb(null, `${file.originalname}`);
  },
});

const singleImageUpload = multer({ storage: singleImageStorage }).single(
  "image"
);

const arrayImageUpload = multer({ storage: arrayImageStorage }).array(
  "houseImages",
  3
);

app.post("/upload", singleImageUpload, (req, res) => {
  try {
    console.log(req.body);
    console.log(req.file);

    // Process and store the single image as needed
    res.json({ message: "Single image uploaded successfully" });
  } catch (error) {
    console.error("Error during single image upload", error);
    res.status(500).json({ error: "Failed to upload single image" });
  }
});

app.post("/houseImages", arrayImageUpload, (req, res) => {
  try {
    console.log(req.body);
    console.log(req.files);

    // Process and store the array of images as needed
    // For demonstration purposes, we'll just send back the file names
    const imageUrls = req.files.map((file) => ({
      originalname: file.originalname,
      filename: file.filename,
    }));

    res.json(imageUrls);
  } catch (error) {
    console.error("Error during house images upload", error);
    res.status(500).json({ error: "Failed to upload house images" });
  }
});

app.listen(3001, () => {
  console.log("Server is running");
});
