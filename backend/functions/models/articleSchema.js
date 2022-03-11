const mongoose = require("mongoose");
const article = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  author: { type: mongoose.ObjectId },
  content: { type: String, required: true },
  timeToRead: { type: String, required: true },
  html: { type: String, required: true },
  posted: { type: Date, default: Date.now },
  hidden: { type: Boolean, required: true },
  tags: [{ type: String, required: true }],
  votes: { type: Number, default: 0 },
});
module.exports = mongoose.model("article", article);
