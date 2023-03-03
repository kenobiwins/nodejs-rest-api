const { listContacts } = require("../../models/contacts");

const getAllContacts = async (req, res, next) => {
  try {
    const data = await listContacts();
    res.json({ message: "All contacts", data });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = getAllContacts;
