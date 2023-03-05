const httpError = require("../helpers/httpErrorsHandlers");

const validateBody = (schema, message = "missing fields") => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return next(httpError(400, error.message));
    }
    next();
  };
  return func;
};

module.exports = validateBody;
