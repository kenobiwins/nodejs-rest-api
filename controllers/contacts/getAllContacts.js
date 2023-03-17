const  ContactModel  = require("../../models/contacts");

const getAllContacts = async (req, res, next) => {
  const data = await ContactModel.find({});

  res.status(200).json(data);
};

module.exports = getAllContacts;
