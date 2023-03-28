const jwt = require("jsonwebtoken");
const UserModel = require("../models/users");
const { httpError } = require("../helpers");
const { SECRET_KEY } = process.env;

const validateJwtToken = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [tokenType, token] = authorization.split(" ");

  // validate request string
  if (!authorization || tokenType !== "Bearer") {
    return next(httpError(400));
  }

  // validate token
  try {
    jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return next(httpError(401));
  }

  // get user
  const { _id: id } = jwt.decode(token);
  const userWithToken = await UserModel.findById(id);
  if (!userWithToken || userWithToken.token !== token) {
    return next(httpError(401));
  }

  // save user`s info and invoke next func
  req.user = { id, userDoc: userWithToken };
  next();
};

module.exports = validateJwtToken;
