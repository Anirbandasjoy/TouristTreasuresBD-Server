const wishListRouter = require("express").Router();
const {
  createWishData,
  getWishlistData,
  deleteWishlistData,
  getSingleWishlistData,
} = require("../controller/wishListController");
const { verifyToken } = require("../middlewares/auth");

wishListRouter.post("/create-wishListData", createWishData);
wishListRouter.get("/get-single-wishListData/:id", getSingleWishlistData);
wishListRouter.get("/get-wishlistData/:email", verifyToken, getWishlistData);
wishListRouter.delete("/delete-wishlistData/:id", deleteWishlistData);

module.exports = wishListRouter;
