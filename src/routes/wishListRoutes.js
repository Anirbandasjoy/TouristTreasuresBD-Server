const {
  createWishData,
  getWishlistData,
  deleteWishlistData,
} = require("../controller/wishListController");
const { verifyToken } = require("../middlewares/auth");

const wishListRouter = require("express").Router();

wishListRouter.post("/create-wishListData", createWishData);
wishListRouter.get("/get-wishlistData/:email", verifyToken, getWishlistData);
wishListRouter.delete("/delete-wishlistData/:id", deleteWishlistData);

module.exports = wishListRouter;
