const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const getCurrentUserInfo = require("./getCurrentUserInfo");
const changeSubscription = require("./changeSubscription");

module.exports = {
  register,
  login,
  logout,
  getCurrentUserInfo,
  changeSubscription,
};
