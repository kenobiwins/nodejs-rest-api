const getCurrentUserInfo = async (req, res, next) => {
  const { userDoc } = req.user;
  const { email, subscription } = userDoc;

  // send back user info
  res.status(200).json({ email, subscription });
};

module.exports = getCurrentUserInfo;
