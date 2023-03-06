const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

const contactPath = path.resolve(__dirname, "contacts.json");

async function getParsedDataFromFile(filePath) {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

const listContacts = async () => {
  const data = getParsedDataFromFile(contactPath);

  return data;
};

const getContactById = async (contactId) => {
  const data = await listContacts();
  const contactById = data.find((el) => el.id === contactId);

  return contactById;
};

const removeContact = async (contactId) => {
  if (!contactId) {
    return;
  }

  const data = await listContacts();
  const indexForRemove = data.findIndex((contact) => contact.id === contactId);

  if (indexForRemove === -1) {
    return;
  }

  const removedContact = data[indexForRemove];
  data.splice(indexForRemove, 1);
  await fs.writeFile(contactPath, JSON.stringify(data));
  return removedContact;
};

const addContact = async (body) => {
  const data = await getParsedDataFromFile(contactPath);
  const newContact = { id: v4(), ...body };

  data.push(newContact);

  await fs.writeFile(contactPath, JSON.stringify(data));

  return newContact;
};

const updateContact = async (contactId, body) => {
  if (!contactId) {
    return;
  }
  const data = await listContacts();
  const indexForUpdate = data.findIndex((contact) => contact.id === contactId);

  if (indexForUpdate === -1) {
    return;
  }
  data[indexForUpdate] = { ...data[indexForUpdate], ...body };
  await fs.writeFile(contactPath, JSON.stringify(data));

  return data[indexForUpdate];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
