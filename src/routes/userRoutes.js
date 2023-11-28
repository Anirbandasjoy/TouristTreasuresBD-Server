const {
  getAllUsers,
  createUser,
  getRoll,
  getGuide,
  getSingleUser,
  updateRole,
  deleteUser,
} = require("../controller/userController");
const { verifyToken, verifyAdmin } = require("../middlewares/auth");

const userRouter = require("express").Router();

userRouter.get("/users", verifyToken, verifyAdmin, getAllUsers);
userRouter.get("/single-user/:id", getSingleUser);
userRouter.put("/user/:email", createUser);
userRouter.get("/get-role/:email", getRoll);
userRouter.get("/get-guide/:role", getGuide);
userRouter.patch("/update-role/:id", verifyToken, verifyAdmin, updateRole);
userRouter.delete("/delete-user/:id", verifyToken, verifyAdmin, deleteUser);

module.exports = userRouter;
