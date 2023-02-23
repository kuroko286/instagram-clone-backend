const { getAllPost, createPost } = require("../services/post.service");
const Post = require("../models/post.model");
const fs = require("fs");

const apiGetAllPost = async (req, res, next) => {
  try {
    const posts = await getAllPost();
    if (!posts) {
      res.status(404).json({ msg: "Post not found!" });
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error!", error: error });
  }
};

const apiCreatePost = async (req, res, next) => {
  try {
    const { title, message, creator, tags } = req.body;
    const image = {
      data: fs.readFileSync("uploads/" + req.file.filename),
      contentType: "image/png",
    };
    const newPost = new Post({ title, message, creator, tags, image });
    await createPost(newPost);
    res.json(newPost);
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error!", error: error });
  }
};

module.exports = { apiCreatePost, apiGetAllPost };
