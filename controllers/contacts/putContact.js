const httpError = require("../../helpers/httpErrorsHandlers");
const ContactModel = require("../../models/contacts");

const putContact = async (req, res, next) => {
  const updatedContact = await ContactModel.findByIdAndUpdate(req.params.contactId, req.body, {
    new: true,
  });
  if (!updatedContact) throw httpError(404);

  res.status(200).json(updatedContact);
};

module.exports = putContact;