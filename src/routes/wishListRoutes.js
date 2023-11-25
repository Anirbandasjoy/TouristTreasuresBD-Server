const { createWishData } = require("../controller/wishListController");

const wishListRouter = require("express").Router();

wishListRouter.get("/create-wishListData", createWishData);

module.exports = wishListRouter;
