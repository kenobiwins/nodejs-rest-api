const { addContact } = require("../../models/contacts");
const { addContactSchema } = require("../../schemas/schemasContacts");

const postContact = async (req, res, next) => {
  try {
    const contactForAdd = req.body;
    const { error } = addContactSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const data = await addContact(contactForAdd);

    res.status(201).json({ message: "contact added", data });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = postContact;
