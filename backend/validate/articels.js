const mongoose = require("mongoose");
const Article = require("../models/articleSchema");
const slugify = require("slugify");

//get all with the limit of 20 articles
const articles = async (req, res) => {
  try {
    Article.find({}, async (err, found) => {
      //if the title has been used
      if (found) {
        if(found.hidden==true)
          return res.status(404).send("Page not Found")
        return res.send(found);
      }
    }).limit(20)
  }
  catch(err){
    res.status(500).send(err);
  }
};

//open one article
const articlesSearch = async (req, res) =>{
  const slug = req.params.slug
  try {
    Article.findOne({ slug: slug }, async (err, found) => {
      //if the title has been used
      if (found) {
        if(found.hidden==true)
          return res.status(404).send("Page not Found")
        return res.send(found);
      }
    })
  }
  catch(err){
    res.status(500).send(err);
  }
}
module.exports = {articles,articlesSearch}