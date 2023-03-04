const httpError = require("../../helpers/httpErrorsHandlers");
const { getContactById } = require("../../models/contacts");

const getContact = async (req, res, next) => {
  const { contactId } = req.params;
  const data = await getContactById(contactId);

  if (!data) {
    throw httpError(404);
  }

  res.json(data);
};

module.exports = getContact;
