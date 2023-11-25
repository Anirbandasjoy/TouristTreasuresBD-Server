const {
  createPackage,
  getAllPackages,
  getSiglePackage,
} = require("../controller/packageController");

const packageRouter = require("express").Router();

packageRouter.post("/package", createPackage);
packageRouter.get("/packages", getAllPackages);
packageRouter.get("/package/:id", getSiglePackage);
module.exports = packageRouter;
