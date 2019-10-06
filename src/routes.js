const express = require("express");
const AuthController = require("./controllers/AuthController");

const routes = express.Router();

routes.post("/users", AuthController.store);

module.exports = routes;
