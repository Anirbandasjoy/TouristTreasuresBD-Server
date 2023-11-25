const Wishlist = require("../model/WishListModel");

const createWishData = async (req, res, next) => {
  try {
    const wishlistData = req.body;
    const exsist = await Wishlist.find({ email: wishlistData.email });
    if (exsist) {
      return res.send("Already Added ");
    }
    const result = await Wishlist.create(wishlistData);
    if (result) {
      return res
        .status(200)
        .send({ message: "Wishlist Data Added Successfully", status: 201 });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createWishData,
};
