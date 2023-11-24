const Package = require("../model/packageModel");

const createPackage = async (req, res, next) => {
  try {
    const packagesData = req.body;
    const result = await Package.create(packagesData);
    if (result) {
      return res
        .status(200)
        .send({ message: "Package Created Successfully", status: 201 });
    }
  } catch (error) {
    next(error);
  }
};

const getAllPackages = async (req, res, next) => {
  try {
    const packages = await Package.find();
    res.status(200).send(packages);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPackage,
  getAllPackages,
};
