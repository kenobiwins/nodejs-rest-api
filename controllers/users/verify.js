const UserModel = require("../../models/users");
const { httpError } = require("../../helpers");

const verify = async (req, res, next) => {
  const { verificationToken } = req.params;
  console.log(verificationToken);
  // is user exist in DB
  const userWithVerToken = await UserModel.findOne({
    verificationToken,
    verified: false,
  });
  if (!userWithVerToken) throw httpError(404, "Unverified user with provided token not found");

  // erase verification token and set verified flag
  userWithVerToken.verificationToken = "-";
  userWithVerToken.verified = true;
  const updatedUser = await userWithVerToken.save();
  if (!updatedUser) throw httpError(500, "Failed to update user`s info");

  // report
  res.status(200).json({ message: "Verification succeed" });
};

module.exports = verify;
