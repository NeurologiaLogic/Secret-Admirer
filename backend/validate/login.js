const mongoose = require("mongoose");
const User = require("../models/userSchema");
const argon2 = require("argon2");
exports.login = async (req, res) => {
  User.findOne({ email: req.body.email }, async (err, doc) => {
    if (!doc) {
      return await res.send("email does not exist");
    }
    const verify = await argon2.verify(doc.password, req.body.password);
    if (!verify) return await res.send("wrong email or credentials");
    req.session.name = await doc.name;
    req.session.monggoID = await doc._id;
    await res.send(doc);
    // const GetUser = User.findOne({ email: req.body.email , password:user});

    // pantes anying belom nyari db
    //call session

    // .catch((err) => {
    //   console.log(err)
    // });
    //save it
    // res.status(200).send(req.session.email);
    //login confirm
    //if fail return to login
  });
};
