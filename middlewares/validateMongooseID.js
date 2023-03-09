const { isValidObjectId } = require("mongoose");
const { httpError } = require("../helpers");

const validateMongooseID = (req, res, next) => {
  const { contactId } = req.params;

  if (!isValidObjectId(contactId)) next(httpError(404, `Invalid ID: ${contactId}`));

  next();
};

module.exports = validateMongooseID;
