const jwt = require("jsonwebtoken");
require("dotenv").config();

const createJwt = async (req, res, next) => {
  try {
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "365d",
    });

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .send({ success: true });
  } catch (error) {
    next(error);
  }
};

const logOut = async (req, res, next) => {
  try {
    res
      .clearCookie("token", {
        httpOnly: true,
        maxAge: 0,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      })
      .send({ success: true });
    console.log("Logout successful");
  } catch (err) {
    next(err);
    res.status(500).send(err);
  }
};

module.exports = {
  createJwt,
  logOut,
};
