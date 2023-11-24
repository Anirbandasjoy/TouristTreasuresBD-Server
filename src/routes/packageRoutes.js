const { createPackage } = require("../controller/packageController");

const packageRouter = require("express").Router();

packageRouter.post("/packages", createPackage);

module.exports = packageRouter;
