const mongoose = require("mongoose");
const Letter = require("../models/letterSchema");
const slugify = require("slugify");

//open one article
const viewLetter = async (req, res) => {
  const slug = req.params.slug;
  try {
    Letter.findOne({ slug: slug }, async (err, found) => {
      //if the title has been used
      if (found) {
        if (found.hidden == true) return res.status(404).send("Page not Found");
        return res.send(found);
      }
      res.send()
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = {viewLetter};
