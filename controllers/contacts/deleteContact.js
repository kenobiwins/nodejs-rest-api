const { removeContact } = require("../../models/contacts");

const deleteContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const data = await removeContact(contactId);

    if (!data) {
      res.status(404).json({ message: "Contact has not been found." });
    }

    res.json({ message: "contact removed", data });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = deleteContact;
