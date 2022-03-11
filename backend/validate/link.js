const register = require("./register").register;
const login = require("./login").login;
const logout = require("./logout").logout;
const articles = require("./articels").articles;
const articlesSearch = require("./articels").articlesSearch;
const createArticle = require("./createArticle").createArticle;

module.exports = {
  register,
  login,
  logout,
  articles,
  articlesSearch,
  createArticle,
};
