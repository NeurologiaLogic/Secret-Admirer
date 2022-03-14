const mongoose = require("mongoose");
const Letter = require("../models/letterSchema");
const slugify = require("slugify");

//open one article
exports.viewLetter = async (req, res) => {
  const slug = req.params.slug;
  try {
    Letter.findOne({ slug: slug }, async (err, found) => {
      //if the title has been used
      if (found) {
        console.log(found);
        res.render("ViewLetter", { content: found.content });
        // return res.send(found);
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
