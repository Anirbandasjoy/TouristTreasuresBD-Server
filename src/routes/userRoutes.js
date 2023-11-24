const { getAllUsers } = require("../controller/userController");

const userRouter = require("express").Router();

userRouter.get("/users", getAllUsers);

module.exports = userRouter;
