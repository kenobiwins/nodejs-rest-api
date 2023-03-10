const httpError = require("../helpers/httpErrorsHandlers");

const validateBody = (schema, message) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return next(httpError(400,message || error.message));
    }
    next();
  };
  return func;
};

module.exports = validateBody;
