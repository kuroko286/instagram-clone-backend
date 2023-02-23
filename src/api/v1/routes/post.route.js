const {
  apiCreatePost,
  apiGetAllPost,
} = require("../controllers/post.controller");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },

  filename: (req, file, cb) => {
    cb(null, file.filename + "-" + Date.now());
  },
});
const upload = multer({ storage: storage });
const express = require("express");
const route = express.Router();

route.get("/", apiGetAllPost);
route.post("/", upload.single("image"), apiCreatePost);

module.exports = route;
