const { getAllUsers, createUser } = require("../controller/userController");

const userRouter = require("express").Router();

userRouter.get("/users", getAllUsers);
userRouter.put("/user/:email", createUser);

module.exports = userRouter;
