const express = require("express");
const AuthController = require("./controllers/AuthController");
const SpotController = require("./controllers/SpotController");

const routes = express.Router();

routes.post("/users", AuthController.store);

routes.post("/spots", SpotController.store);

module.exports = routes;
