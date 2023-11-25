const User = require("../model/userModel");
const createUser = async (req, res, next) => {
  const email = req.params.email;
  const {
    name,
    image,
    role,
    phone,
    education,
    contactInfo,
    specializations,
    experience,
  } = req.body;
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
        phone: phone,
        education: education,
        contactInfo: contactInfo,
        specializations: specializations,
        experience: experience,
        timestamp: Date.now(),
      });

      const result = await newUser.save();
      res.status(201).json(result);
    }
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({ role: { $ne: "Admin" } });
    if (!users) {
      return res.status(404).send({ message: "User not found ", code: 404 });
    }
    res.status(200).send(users);
  } catch (error) {
    next(error);
  }
};

const getRoll = async (req, res, next) => {
  try {
    const email = req.params.email;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).send({ message: "User Not Found", code: 404 });
    }
    const role = user?.role;
    res.status(200).send(role);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getRoll,
};
