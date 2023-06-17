const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const getCurrentUserInfo = require("./getCurrentUserInfo");
const changeSubscription = require("./changeSubscription");
const updateUserAvatar = require("./updateUserAvatar");
const resendVerifyEmail = require('./resendVerifyEmail')
const verify = require('./verify')
const sendVerificationLink = require('./sendVerificationLink')

module.exports = {
  register,
  login,
  logout,
  getCurrentUserInfo,
  changeSubscription,
  updateUserAvatar,
  resendVerifyEmail,
  verify,
  sendVerificationLink,
};
