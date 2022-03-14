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
  nodeMailer
} = require("../validate/link");
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

//send email
router.post("/email",nodeMailer)

//ARTICLE OPEN
router.get("/letter/:slug", viewLetter);

//ARTICLE HOME
// router.get("/posts", articles);

//ejs test
router.get("/", async (req, res) => {
  res.locals.name = await "patrick";
  await qrCode
    .toDataURL(res.locals.name)
    .then((reslt) => {
      res.render("LandingPage", { QrCode: "" });
    })
    .catch((err) => {
      err;
    });
});

//generate Qr
// router.get("/qr",writePage)

module.exports = router;
