#!/usr/bin/env node

/**
 * Module dependencies.
 */
//import app
const functions = require("firebase-functions");
var app = require("./app");
var debug = require("debug")("backend:server");
var http = require("https");
var fs = require("fs");
// require("dotenv").config();
/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || "3000");
// app.set("port", 3000);

/**
 * Create HTTP server.
 */
// let privateKey = fs.readFileSync(
//   "C:/Users/oensi/Desktop/everit/EveriitRevamp/backend/bin/key.pem"
// );
// let certificate = fs.readFileSync(
//   "C:/Users/oensi/Desktop/everit/EveriitRevamp/backend/bin/cert.pem"
// );
// let privateKey = fs.readFileSync("C://Users//oensi//localhost+1-key.pem");
// let certificate = fs.readFileSync("C://Users//oensi//localhost+1.pem");
// let privateKey = fs.readFileSync("key.pem");
// let certificate = fs.readFileSync("cert.pem");
// { key: privateKey, cert: certificate },
var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
exports.app = functions.https.onRequest(server);

console.log(port);

/**
 * Event listener for HTTP server "listening" event.
 */


