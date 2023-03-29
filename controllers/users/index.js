const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const getCurrentUserInfo = require("./getCurrentUserInfo");
const changeSubscription = require("./changeSubscription");
const updateUserAvatar = require("./updateUserAvatar");

module.exports = {
  register,
  login,
  logout,
  getCurrentUserInfo,
  changeSubscription,
  updateUserAvatar,
};
