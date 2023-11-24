const Package = require("../model/packageModel");

const createPackage = async (req, res, next) => {
  try {
    const packagesData = req.body;
    const result = await Package.create(packagesData);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPackage,
};
