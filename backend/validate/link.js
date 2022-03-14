const register = require("./register").register;
const login = require("./login").login;
const logout = require("./logout").logout;
const createLetter = require("./createLetter").createLetter;
const viewLetter = require("./viewLetter").viewLetter;
const nodeMailer = require("./nodeMailer").nodeMailer;

module.exports = {
  register,
  login,
  logout,
  createLetter,
  viewLetter,
  nodeMailer
};
