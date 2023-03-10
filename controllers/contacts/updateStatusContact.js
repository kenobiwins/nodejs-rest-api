const putContact = require("./putContact");

const updateStatusContact = async (req, res, next) => {
  putContact(req, res, next);
};

module.exports = updateStatusContact;