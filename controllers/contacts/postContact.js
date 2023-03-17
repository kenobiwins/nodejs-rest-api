const ContactModel = require("../../models/contacts");

const postContact = async (req, res, next) => {
  const addedContact = await ContactModel.create(req.body);

  res.status(201).json(addedContact);
};

module.exports = postContact;