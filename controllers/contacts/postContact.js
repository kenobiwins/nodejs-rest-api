const ContactModel = require("../../models/contacts");

const postContact = async (req, res, next) => {
  const addedContact = await ContactModel.create(req.body);

  res.status(201).json(addedContact);
};

// const postContact = async (req, res, next) => {
//   const contactForAdd = req.body;
//   const data = await addContact(contactForAdd);

//   res.status(201).json(data);
// };

module.exports = postContact;
