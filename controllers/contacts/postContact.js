const { addContact } = require("../../models/contacts");

const postContact = async (req, res, next) => {
  const contactForAdd = req.body;
  const data = await addContact(contactForAdd);

  res.status(201).json(data);
};

module.exports = postContact;
