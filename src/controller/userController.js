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
    // { role: { $ne: "Admin" } }
    const users = await User.find();
    if (!users) {
      return res.status(404).send({ message: "User not found ", code: 404 });
    }
    res.status(200).send(users);
  } catch (error) {
    next(error);
  }
};

const getGuide = async (req, res, next) => {
  try {
    const role = req.params.role;
    const users = await User.find({ role: role });
    if (!users || users.length === 0) {
      return res.status(404).send({ message: "User Not Found", code: 404 });
    }
    res.status(200).send(users);
  } catch (error) {
    next(error);
  }
};

const getSingleUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(404).send({ message: "User Not Found", code: 404 });
    }
    res.status(200).send(user);
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

const updateRole = async (req, res, next) => {
  const id = req.params.id;
  const role = req.query.role;
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      { role: role },
      { upsert: true, new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getRoll,
  getGuide,
  getSingleUser,
  updateRole,
};
