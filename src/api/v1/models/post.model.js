const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  image: {
    data: Buffer,
    contentType: String,
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = Post = mongoose.model("Post", postSchema);
