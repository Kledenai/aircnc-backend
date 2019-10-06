const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const AuthController = require("./controllers/AuthController");
const SpotController = require("./controllers/SpotController");
const DashboardController = require("./controllers/DashboardController");

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post("/users", AuthController.store);

routes.get("/spots", SpotController.index);

routes.post("/spots", upload.single("thumbnail"), SpotController.store);

routes.get("/dashboard", DashboardController.show);

module.exports = routes;
