const {
  createWishData,
  getWishlistData,
  deleteWishlistData,
} = require("../controller/wishListController");

const wishListRouter = require("express").Router();

wishListRouter.post("/create-wishListData", createWishData);
wishListRouter.get("/get-wishlistData/:email", getWishlistData);
wishListRouter.delete("/delete-wishlistData/:id", deleteWishlistData);

module.exports = wishListRouter;
