const joi = require('joi')

const userSchema = joi.object({
  password: joi.string().min(6).required(),
  email: joi.string().required(),
});

const subscriptionSchema = joi.object({
  subscription: joi.string().valid("starter", "pro", "business").required(),
});

module.exports = { userSchema, subscriptionSchema };