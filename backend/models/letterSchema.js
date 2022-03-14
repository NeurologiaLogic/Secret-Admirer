const mongoose = require("mongoose");
const letter = new mongoose.Schema({
  slug: { type: String, required: true },
  content: { type: String, required: true },
  password:{ type: String, required: true },
  type:{ type: String, required: true },
  hint: { type: String},
  // html: { type: String, required: true },
});
module.exports = mongoose.model("letter", letter);
