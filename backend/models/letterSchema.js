const mongoose = require("mongoose");
const letter = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  tips: { type: String},
  content: { type: String, required: true },
  // html: { type: String, required: true },
});
module.exports = mongoose.model("letter", letter);
