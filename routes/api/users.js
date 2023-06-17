const express = require("express");

const asyncMiddleware = require("../../helpers/asyncMiddleware");
const { userSchema, subscriptionSchema, verifySchema } = require("../../schemas/schemasUsers");
const { validateBody } = require("../../middlewares/validateBody");
const validateJwtToken = require("../../middlewares/authValidation");
const controller = require("../../controllers/users");
const uploadImage = require("../../middlewares/uploadImage");

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
usersRouter.post(
  "/verify",
  validateBody(verifySchema, "missing required field email"),
  asyncMiddleware(controller.resendVerifyEmail)
);

usersRouter.get("/current", validateJwtToken, asyncMiddleware(controller.getCurrentUserInfo));
usersRouter.get("/verify/:verificationToken", asyncMiddleware(controller.verify));

usersRouter.patch(
  "/",
  validateJwtToken,
  validateBody(subscriptionSchema, "Error from Joi or other validation library"),
  asyncMiddleware(controller.changeSubscription)
);
usersRouter.patch(
  "/avatars",
  validateJwtToken,
  uploadImage.single('avatar'),
  asyncMiddleware(controller.updateUserAvatar)
);

module.exports = usersRouter;
