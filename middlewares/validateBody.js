const httpError = require("../helpers/httpErrorsHandlers");

const validateType = {
  BODY: "body",
  QUERY: "query",
};

function joiSchemaValidation(schema, reqType = validateType.BODY, errorMessage){
  const func = (req, res, next) => {
    const data = reqType === validateType.BODY ? req.body : req.query;
    const { error } = schema.validate(data);
    if (error) {
      return next(httpError(400, errorMessage || error.message));
    }
    next();
  };
  return func;
};

function validateBody(schema, message ="") {
  return joiSchemaValidation(schema, validateType.BODY, message);
};

function validateQueryParams(schema, message){
  return joiSchemaValidation(schema, validateType.QUERY, message);
};

module.exports = { validateBody, validateQueryParams };
