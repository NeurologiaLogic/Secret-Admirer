const mongoose = require("mongoose");
const Letter = require("../models/letterSchema");
const slugify = require("slugify");
// const marked = require("marked").marked;
// const timeToRead =require("reading-time")
//purify setup from documentation
// const createDOMPurify = require("dompurify");
// const { JSDOM } = require("jsdom");
// const window = new JSDOM("").window;
// const DOMPurify = createDOMPurify(window);
//
const { v4: uuidv4 } = require('uuid');
exports.createArticle = async (req, res) => {
  // if (!req.session.name) return res.send("not authenticated");
  //duplikasi form yang sama
  //harus baca documentasi tentang mencari karena ini email gk bisa
  try {
    const {sender,content,tips} = req.body;
    //make it so that the url is more readable
    const id = uuidv4();
    const slugID = await slugify(id, {
      replacement: "_",
      remove: /[*+~-.()'"!:@]/g,
      lower: true,
      strict: true,
    });
    //create letter
    const letter = await new Letter({
      title: sender,
      slug: slugID,
      content: content,
      tips: tips,
    });
      //save
      await letter
        .save()
        .then((rest) => {
          console.log(rest);
        })
        .catch((err) => {
          console.log(err);
          res.send("not found");
        });
    }
    catch(e){
      res.redirect("/");
    }
  // res.send(`${req.session.name} has posted an article`);
};
//belom dimasukin keatas
