const { httpError } = require("../../helpers");
const UserModel = require("../../models/users");


const register = async (req, res, next) => {
  const { email, password } = req.body;

  // is user exist in DB
  const hasUserWithEmail = !!(await UserModel.findOne({ email }));
  if (hasUserWithEmail) throw httpError(409, "Email in use");

  // create and save new user
  const newUser = new UserModel({ email });
  newUser.addPassword(password);
  const savedUser = await newUser.save();
  if (!savedUser) throw httpError(500, "Failed to save new user");

  // report
  const { subscription } = savedUser;
  res.status(201).json({ user: { email, subscription } });
};

module.exports = register;