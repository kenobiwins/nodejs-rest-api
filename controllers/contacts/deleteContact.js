const httpError = require("../../helpers/httpErrorsHandlers");
const ContactModel = require("../../models/contacts");

const deleteContact = async (req, res, next) => {
  const deletedContact = await ContactModel.findByIdAndRemove(req.params.contactId);
  if (!deletedContact) throw httpError(404);

  res.status(200).json({ message: "contact deleted" });
};

// const deleteContact = async (req, res, next) => {
//   const { contactId } = req.params;
//   const data = await removeContact(contactId);

//   if (!data) {
//     throw httpError(404);
//   }

//   res.status(200).json({ message: "contact deleted" });
// };

module.exports = deleteContact;
