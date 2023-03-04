const httpError = require("../../helpers/httpErrorsHandlers");
const { removeContact } = require("../../models/contacts");

const deleteContact = async (req, res, next) => {
  const { contactId } = req.params;
  const data = await removeContact(contactId);

  if (!data) {
    throw httpError(404);
  }

  res.status(200).json({ message: "contact deleted" });
};

module.exports = deleteContact;
