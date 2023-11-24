const getAllUsers = (req, res, next) => {
  try {
    res.send("hello i am users");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
};
