const mongoose = require("mongoose");
const Letter = require("../models/letterSchema");
const slugify = require("slugify");
const qrCode = require("qrCode");
// const marked = require("marked").marked;
// const timeToRead =require("reading-time")
//purify setup from documentation
// const createDOMPurify = require("dompurify");
// const { JSDOM } = require("jsdom");
// const window = new JSDOM("").window;
// const DOMPurify = createDOMPurify(window);
//
const { v4: uuidv4 } = require("uuid");
exports.createLetter = async (req, res) => {
  // if (!req.session.name) return res.send("not authenticated");
  //duplikasi form yang sama
  //harus baca documentasi tentang mencari karena ini email gk bisa
  try {
    const { content, hint, password, type } = req.body;
    let types = type;
    if (typeof types === "undefined") {
      types = "off";
      console.log(type);
    }
    //make it so that the url is more readable
    const id = await uuidv4();
    const slugID = await slugify(id, {
      replacement: "_",
      remove: /[*+~.()'"!:@]/g,
      lower: true,
      strict: true,
    });
    //create letter
    const letter = await new Letter({
      slug: slugID,
      content: content,
      hint: hint,
      password: password,
      type: types,
    });
    //save
    await letter
      .save()
      .then((rest) => {
        console.log(rest);
        //render here for qr and email
        qrCode
          .toDataURL(`https://localhost:6969/letter/${slugID}`)
          .then((reslt) => {
            res.send({
              slug: slugID,
              QrCode: reslt,
              // content: content,
              // hint: hint,
              // password: password,
              // type:types
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        res.send(err);
        // res.locals.content =
        // res.render("LandingPage",{content:content,hint:hint,password:password});
      });
  } catch (e) {
    //call qr code and email

    console.log(e);
    res.redirect("/");
  }
  // res.send(`${req.session.name} has posted an article`);
};
//belom dimasukin keatas
