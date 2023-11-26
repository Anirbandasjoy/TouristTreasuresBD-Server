const {
  createPackage,
  getAllPackages,
  getSiglePackage,
  deletePackage,
  getToutTypesData,
} = require("../controller/packageController");

const packageRouter = require("express").Router();

packageRouter.post("/package", createPackage);
packageRouter.delete("/package/:id", deletePackage);
packageRouter.get("/packages", getAllPackages);
packageRouter.get("/package/:id", getSiglePackage);
packageRouter.get("/tourType", getToutTypesData);
module.exports = packageRouter;
