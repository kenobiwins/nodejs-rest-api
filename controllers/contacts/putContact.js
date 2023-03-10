const httpError = require("../../helpers/httpErrorsHandlers");
const ContactModel = require("../../models/contacts");

const putContact = async (req, res, next) => {
  const updatedContact = await ContactModel.findByIdAndUpdate(req.params.contactId, req.body, {
    new: true,
  });
  if (!updatedContact) throw httpError(404);

  res.status(200).json(updatedContact);
};
// const putContact = async (req, res, next) => {
//   const { contactId } = req.params;
//   const { body } = req;

//   const data = await updateContact(contactId, body);

//   if (!data) {
//     throw httpError(404);
//   }

//   res.status(200).json(data);
// };

module.exports = putContact;
