const express = require("express");

const controller = require("../../controllers/contacts");
const {validateBody, validateQueryParams} = require("../../middlewares/validateBody");

const {
  updateContactSchema,
  updateFavoriteField,
  addContactSchema,
  getContactsQueryParam,
} = require("../../schemas/schemasContacts");
const asyncMiddleware = require("../../helpers/asyncMiddleware");
const validateMongooseID = require("../../middlewares/validateMongooseID");
const validateJwtToken = require("../../middlewares/authValidation");

const contactsRouter = express.Router();

contactsRouter.all('*',validateJwtToken)

contactsRouter.get(
  "/",
  validateQueryParams(getContactsQueryParam, "Wrong query parameter value"),
  asyncMiddleware(controller.getAllContacts)
);
contactsRouter.get("/:contactId", validateMongooseID, asyncMiddleware(controller.getContact));
contactsRouter.post("/", validateBody(addContactSchema), asyncMiddleware(controller.postContact));
contactsRouter.delete("/:contactId", validateMongooseID, asyncMiddleware(controller.deleteContact));
contactsRouter.put(
  "/:contactId",
  validateMongooseID,
  validateBody(updateContactSchema),
  asyncMiddleware(controller.putContact)
);
contactsRouter.patch(
  "/:contactId/favorite",
  validateMongooseID,
  validateBody(updateFavoriteField), asyncMiddleware(controller.updateStatusContact));

module.exports = contactsRouter;
