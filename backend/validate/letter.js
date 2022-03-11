const mongoose = require("mongoose");
const Letter = require("../models/letterSchema");
const slugify = require("slugify");

//open one article
const letterSearch = async (req, res) => {
  const slug = req.params.slug;
  try {
    Article.findOne({ slug: slug }, async (err, found) => {
      //if the title has been used
      if (found) {
        if (found.hidden == true) return res.status(404).send("Page not Found");
        return res.send(found);
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = {letterSearch};
