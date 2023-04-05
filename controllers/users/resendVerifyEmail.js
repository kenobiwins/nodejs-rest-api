const UserModel = require("../../models/users");
const { httpError } = require("../../helpers");
const sendVerificationLink = require("./sendVerificationLink");

const resendVerifyEmail = async (req, res, next) => {
  const { email } = req.body;

  // is user exist in DB
  const userWithEmail = await UserModel.findOne({ email });
  if (userWithEmail.verified) throw httpError(400, "Verification has already been passed");

  // send email with verification link
  await sendVerificationLink(email, userWithEmail.verificationToken);

  // report
  res.status(200).json({ message: "Verification email sent" });
};

module.exports = resendVerifyEmail;
