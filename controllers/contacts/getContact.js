const { getContactById } = require("../../models/contacts");

const getContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const data = await getContactById(contactId);

    if (!data) {
      res.status(404).json({ message: "Contact has not been found." });
    }

    res.json({
      message: "contact with id=" + contactId,
      data,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = getContact;
