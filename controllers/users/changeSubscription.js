const { httpError } = require("../../helpers");

const changeSubscription = async (req, res, next) => {
  const { userDoc } = req.user;

  // update user info
  userDoc.subscription = req.body.subscription;
  const updatedUser = await userDoc.save();
  if (!updatedUser) throw httpError(500, "Failed to update user`s info");

  // send back user info
  const { email, subscription } = updatedUser;
  res.status(200).json({ email, subscription });
};

module.exports = changeSubscription;
