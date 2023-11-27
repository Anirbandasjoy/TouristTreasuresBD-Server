const {
  getAllUsers,
  createUser,
  getRoll,
  getGuide,
  getSingleUser,
  updateRole,
  deleteUser,
} = require("../controller/userController");

const userRouter = require("express").Router();

userRouter.get("/users", getAllUsers);
userRouter.get("/single-user/:id", getSingleUser);
userRouter.put("/user/:email", createUser);
userRouter.get("/get-role/:email", getRoll);
userRouter.get("/get-guide/:role", getGuide);
userRouter.patch("/update-role/:id", updateRole);
userRouter.delete("/delete-user/:id", deleteUser);

module.exports = userRouter;
