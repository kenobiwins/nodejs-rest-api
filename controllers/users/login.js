const { httpError } = require("../../helpers");
const UserModel = require("../../models/users");

const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const login = async (req, res, next) => {
  const { email, password } = req.body;

  // is user exist in DB and are the passwords equal
  const userWithEmail = await UserModel.findOne({ email });
  if (!userWithEmail || !userWithEmail.comparePasswords(password)) {
    throw httpError(401, "Email or password is wrong");
  }
  // add token and update in DB
  const { _id, subscription } = userWithEmail;
  const token = jwt.sign({ _id }, SECRET_KEY, { expiresIn: "6h" });
  userWithEmail.token = token;
  const updatedUser = await userWithEmail.save();
  if (!updatedUser) {
    throw httpError(500, "Failed to update user`s info");
  }
  // report
  res.status(200).json({ token, user: { email, subscription } });
};

module.exports = login;
