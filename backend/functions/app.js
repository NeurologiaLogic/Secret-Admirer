const express = require("express");
const path = require("path");

//server settings
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
// const cookieSession = require("cookie-session");

//server
// const csurfProtection = require("csurf");

//routes
const indexRouter = require("./routes/index");

//database and client
const session = require("express-session");
const mongoDb = require("mongodb").MongoClient;
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const Db = require("./models/monggodb");

//connect to database
require("dotenv").config();
Db.connectIt();
//end setup session

//setting up cookies
const app = express();
app.set("trust proxy", 1);
// app.use(
//   cookieSession({
//     name: "session",
//     keys: ["key1", "ey2"],
// https by default
// Cookie Options
//     maxAge: 60 * 60 * 1000, // 24 hours
//   })
// );
// start();

app.use(
  session({
    secret: "haihai",
    cookie: {},
    // maxAge: 60 * 60 * 1000,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      // client: clientDb,
      mongoUrl: process.env.Db,
      collectionName: "sessions",
      ttl: 24 * 60 * 60,
    }),
  })
);

// app.use(csurfProtection());
app.use(cookieParser());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    origin: ["https://localhost:8080", "https://192.168.1.6:8080"],
    credentials: true,
  })
);

app.use("/api", indexRouter);
// app.use("/users", usersRouter);

module.exports = app;
