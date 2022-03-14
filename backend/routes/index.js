const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const qrCode = require("qrCode");
// const { generateKeyPair } = require("crypto");
require("dotenv").config();
const {
  register,
  login,
  logout,
  createLetter,
  viewLetter,
} = require("../validate/link");
// const { getQr, data } = require("../validate/generateQr");
// const session = require("../models/sessions");
// const mongoose = require("mongoose");
// const csrf = require("csrf");
// const csrfProtection = csrf({cookie:{httpOnly: true}})

//base link
// router.get("/", (req, res, next) => {
//   res.status(200).send("api call");
// next();
// });

//LOGIN
router.post("/login", login);

//REGISTER
router.post("/register", register);

//LOGOUT
router.post("/logout", logout);

//NEW_ARTICLE
router.post("/create", createLetter);

//viewLetter
// router.post("/create", viewLetter);

//ARTICLE OPEN
router.get("/letter/:slug", viewLetter);

//ARTICLE HOME
// router.get("/posts", articles);

//ejs test
router.get("/", async (req, res) => {
  //   res.locals.name = req.session.name;
  res.locals.name = await "patrick";
  await qrCode
    .toDataURL(res.locals.name)
    .then((reslt) => {
      res.render("LandingPage", {
        QrCode: '',
        content: content,
        hint: hint,
        password: password,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

//generate Qr
// router.get("/qr",writePage)

module.exports = router;
