const { httpError } = require("../../helpers");

const logout = async (req, res, next) => {
  const { userDoc } = req.user;

  // annulate user`s token
  userDoc.token = null;
  const updatedUser = await userDoc.save();
  if (!updatedUser) {
    throw httpError(500, "Failed to update user`s info");
  }
  // report
  res.status(204).send();
};

module.exports = logout;
