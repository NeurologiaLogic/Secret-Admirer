require("dotenv").config();
const app = require("../app");
const mongoose = require("mongoose");

function connectIt() {
  mongoose
    .connect(process.env.Db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((client) => {
      return client.connection.getClient();
    })
    .catch((e) => {
      console.log(err);
    });

  // .then(() => console.log("connect successfull"))
  // .catch((err) => console.log(err));
}
module.exports = { connectIt };
