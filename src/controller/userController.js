const User = require("../model/userModel");
const createUser = async (req, res, next) => {
  const email = req.params.email;
  const { name, image, role } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(200).json(existingUser);
    } else {
      const newUser = new User({
        email: email,
        name: name,
        image: image,
        role: role,
        timestamp: Date.now(),
      });

      const result = await newUser.save();
      res.status(201).json(result);
    }
  } catch (error) {
    next(error);
  }
};

const getAllUsers = (req, res, next) => {
  try {
    res.send("hello i am users");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
};
