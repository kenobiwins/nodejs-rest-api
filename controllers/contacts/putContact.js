const { updateContact } = require("../../models/contacts");
const { updateContactSchema } = require("../../schemas/schemasContacts");

const putContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { body } = req;
    const { error } = updateContactSchema.validate(body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const data = await updateContact(contactId, body);

    if (!data) {
      return res.status(404).json({ message: "contact not found" });
    }
    res.json({ message: "contact updated", data });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = putContact;
