const Joi = require("joi");

const addContactSchema = Joi.object({
  name: Joi.string().required().messages({ "any.required": `missing required name field` }),
  email: Joi.string().required().messages({ "any.required": `missing required email field` }),
  phone: Joi.string().required().messages({ "any.required": `missing required phone field` }),
  favorite: Joi.boolean(),
});

const updateContactSchema = Joi.object({
  name: Joi.string().optional(),
  email: Joi.string().optional(),
  phone: Joi.string().optional(),
}).or("name", "email", "phone");

const updateFavoriteField = Joi.object({
  favorite: Joi.boolean().required().messages({ "any.required": `missing field favorite` }),
});

module.exports = {
  addContactSchema,
  updateContactSchema,
  updateFavoriteField,
};
