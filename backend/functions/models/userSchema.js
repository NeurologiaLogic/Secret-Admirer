const mongoose = require("mongoose");

//normal user
// const user = mongoose.Schema({
//   email: {},
//   password: {},
//   name: {},
// })

//blog user
const user = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  blogs: [mongoose.ObjectId],
  followers: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  joined: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("users", user);
