const getCurrentUserInfo = async (req, res, next) => {
  const { userDoc } = req.user;
  const { email, subscription, avatarURL } = userDoc;

  // send back user info
  res.status(200).json({ email, subscription, avatarURL });
};

module.exports = getCurrentUserInfo;
