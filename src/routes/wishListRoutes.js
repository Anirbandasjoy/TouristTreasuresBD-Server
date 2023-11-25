const {
  createWishData,
  getWishlistData,
} = require("../controller/wishListController");

const wishListRouter = require("express").Router();

wishListRouter.post("/create-wishListData", createWishData);
wishListRouter.get("/get-wishlistData/:email", getWishlistData);

module.exports = wishListRouter;
