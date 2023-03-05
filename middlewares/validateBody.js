const httpError = require("../helpers/httpErrorsHandlers");

const validateBody = (schema, message = "missing fields") => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return next(httpError(404, message));
    }
    next();
  };
  return func;
};

module.exports = validateBody;
