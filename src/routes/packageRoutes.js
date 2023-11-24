const {
  createPackage,
  getAllPackages,
} = require("../controller/packageController");

const packageRouter = require("express").Router();

packageRouter.post("/package", createPackage);
packageRouter.get("/packages", getAllPackages);

module.exports = packageRouter;
