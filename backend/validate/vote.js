const mongoose = require("mongoose");
const User = require("../models/userSchema");
const argon2 = require("argon2");

//
exports.register = async (req, res) => {
  try{
    const {email, password,name} = req.body;
    console.log({email,password,name})
    User.findOne({ email: req.body.email }, async (err, found) => {
      if (found) {
        return res.send("email already exist");
      }
      const hashed_password = await argon2.hash(req.body.password, {
        type: argon2.argon2id,
      });
      const user = new User({
        email: req.body.email,
        password: hashed_password,
        name: req.body.name,
      });
      await user
        .save()
        .then((rest) => {
          console.log(rest);
        })
        .catch((err) => {
          console.log(err);
        });
      res.send("user created");
    });
  }catch(e){
    res.send("error creating user")
  }
};
