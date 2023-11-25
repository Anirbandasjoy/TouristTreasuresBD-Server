const {
  getAllUsers,
  createUser,
  getRoll,
} = require("../controller/userController");

const userRouter = require("express").Router();

userRouter.get("/users", getAllUsers);
userRouter.put("/user/:email", createUser);
userRouter.get("/get-role/:email", getRoll);

module.exports = userRouter;
