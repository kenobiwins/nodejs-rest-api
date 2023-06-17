const joi = require("joi");

const userSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().min(6).required(),
});

const subscriptionSchema = joi.object({
  subscription: joi.string().valid("starter", "pro", "business").required(),
});

const verifySchema = joi.object({
  email: joi.string().required(),
});

module.exports = { userSchema, subscriptionSchema, verifySchema };
