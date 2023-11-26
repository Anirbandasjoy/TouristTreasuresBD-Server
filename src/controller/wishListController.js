const Wishlist = require("../model/WishListModel");

const createWishData = async (req, res, next) => {
  try {
    const wishlistData = req.body;
    const result = await Wishlist.create(wishlistData);
    if (result) {
      return res
        .status(201)
        .send({ message: "Wishlist Data Added Successfully", status: 201 });
    }
  } catch (error) {
    next(error);
  }
};

const getWishlistData = async (req, res, next) => {
  try {
    const email = req.params.email;
    const wishlist = await Wishlist.find({ email: email });

    if (!wishlist || wishlist.length === 0) {
      return res.status(404).send({ message: "Wishlist data not found" });
    }
    res.status(200).send(wishlist);
  } catch (error) {
    next(error);
  }
};

const deleteWishlistData = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedData = await Wishlist.deleteOne({ _id: id });
    if (deletedData) {
      return res.status(201).send(deletedData);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createWishData,
  getWishlistData,
  deleteWishlistData,
};
