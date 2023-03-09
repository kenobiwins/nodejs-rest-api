const { httpError } = require("../../helpers");
const ContactModel = require("../../models/contacts");

const getContact = async (req, res, next) => {
  const contact = await ContactModel.findById(req.params.contactId);
  if (!contact) throw httpError(404);

  res.json(contact);
};

module.exports = getContact;
// const { getContactById } = require("../../models/contacts");

// const getContact = async (req, res, next) => {
//   const { contactId } = req.params;
//   const data = await getContactById(contactId);

//   if (!data) {
//     throw httpError(404);
//   }

//   res.status(200).json(data);
// };

// module.exports = getContact;
