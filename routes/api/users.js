const express = require("express");

const asyncMiddleware = require("../../helpers/asyncMiddleware");
const { userSchema, subscriptionSchema } = require("../../schemas/schemasUsers");
const { validateBody } = require("../../middlewares/validateBody");
const validateJwtToken = require("../../middlewares/authValidation");
const controller = require("../../controllers/users");

const usersRouter = express.Router();

usersRouter.post(
  "/register",
  validateBody(userSchema, "Error from Joi or other validation library"),
  asyncMiddleware(controller.register)
);
usersRouter.post(
  "/login",
  validateBody(userSchema, "Error from Joi or other validation library"),
  asyncMiddleware(controller.login)
);
usersRouter.post("/logout", validateJwtToken, asyncMiddleware(controller.logout));
usersRouter.get("/current", validateJwtToken, asyncMiddleware(controller.getCurrentUserInfo));
usersRouter.patch(
  "/",
  validateJwtToken,
  validateBody(subscriptionSchema, "Error from Joi or other validation library"),
  asyncMiddleware(controller.changeSubscription)
);

module.exports = usersRouter