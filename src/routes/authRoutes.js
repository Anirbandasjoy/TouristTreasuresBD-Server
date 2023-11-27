const { createJwt, logOut } = require("../controller/authController");
const authRoutes = require("express").Router();
authRoutes.post("/jwt", createJwt);
authRoutes.get("/logOut", logOut);

module.exports = authRoutes;
