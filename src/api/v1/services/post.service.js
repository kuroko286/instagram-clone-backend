const Post = require("../models/post.model");

const getAllPost = async () => {
  try {
    const posts = await Post.find({});
    return posts;
  } catch (error) {
    console.log(error);
  }
};

const createPost = async (newPost) => {
  try {
    await newPost.save();
    return newPost;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllPost, createPost };
