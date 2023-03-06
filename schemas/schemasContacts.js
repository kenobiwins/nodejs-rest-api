const Joi = require("joi");

const addContactSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": `missing required name field` }),
  email: Joi.string()
    .required()
    .messages({ "any.required": `missing required email field` }),
  phone: Joi.string()
    .required()
    .messages({ "any.required": `missing required phone field` }),
});
// .error((errors) => {
// errors.forEach((error) => {
//   switch (error.type) {
//     case value:
//       break;

//     default:
//       break;
//   }
// });
// });

const updateContactSchema = Joi.object({
  name: Joi.string().optional(),
  email: Joi.string().optional(),
  phone: Joi.string().optional(),
}).or("name", "email", "phone");

module.exports = {
  addContactSchema,
  updateContactSchema,
};
