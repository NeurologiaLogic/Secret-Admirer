const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
// const { generateKeyPair } = require("crypto");
require("dotenv").config();
const { register, login, logout, articles, createArticle,articlesSearch } = require("../validate/link");
// const session = require("../models/sessions");
// const mongoose = require("mongoose");
// const csrf = require("csrf");
// const csrfProtection = csrf({cookie:{httpOnly: true}})

//generate model class
// const sessions = mongoose.model("session", session);

//base link
// router.get("/", (req, res, next) => {
//   res.status(200).send("api call");
// next();
// });

//KEY test for
//added argon2 and jwt
// router.get("/key", (req, res) => {
//   generateKeyPair(
//     "rsa",
//     {
//       modulusLength: 2048,
//       publicKeyEncoding: {
//         type: "spki",
//         format: "pem",
//       },
//       privateKeyEncoding: {
//         type: "pkcs8",
//         format: "pem",
//         cipher: "aes-256-cbc",
//         passphrase: "top secret",
//       },
//     },
//     (err, publicKey, privateKey) => {
//       // Handle errors and use the
//       // generated key pair.
//       res.send(publicKey);
//     }
//   );
// });

//LOGIN
router.post("/login", login);

//REGISTER
router.post("/register", register);

//LOGOUT
router.post("/logout", logout);

//NEW_ARTICLE
router.post("/create", createArticle);

//ARTICLE OPEN
router.get("/posts/:slug", articlesSearch);

//ARTICLE HOME
router.get("/posts", articles);


module.exports = router;
