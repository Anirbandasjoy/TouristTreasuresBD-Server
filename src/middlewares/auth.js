const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
require("dotenv").config();
const verifyToken = async (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) {
    return res.status(401).send({ message: "unauthorized access" });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).send({ message: "unauthorized access" });
    }
    req.user = decoded;
    next();
  });
};
const verifyAdmin = async (req, res, next) => {
  const email = req.user.email;
  const filter = { email: email };
  const user = await User.findOne(filter);
  const isAdmin = user?.role === "Admin";
  if (!isAdmin) {
    return res.status(403).send({ message: "forbidden access" });
  }
  next();
};

module.exports = {
  verifyToken,
  verifyAdmin,
};
