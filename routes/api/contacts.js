const express = require("express");

const controller = require("../../controllers/contacts");
const validateBody = require("../../middlewares/validateBody");
const {
  addContactSchema,
  updateContactSchema,
  updateFavoriteField,
} = require("../../schemas/schemasContacts");
const asyncMiddleware = require("../../helpers/asyncMiddleware");
const validateMongooseID = require("../../middlewares/validateMongooseID");

const router = express.Router();

router.get("/", asyncMiddleware(controller.getAllContacts));
router.get("/:contactId", validateMongooseID, asyncMiddleware(controller.getContact));
router.post("/", validateBody(addContactSchema), asyncMiddleware(controller.postContact));
router.delete("/:contactId", validateMongooseID, asyncMiddleware(controller.deleteContact));
router.put(
  "/:contactId",
  validateMongooseID,
  validateBody(updateContactSchema),
  asyncMiddleware(controller.putContact)
);
router.patch(
  "/:contactId/favorite",
  validateMongooseID,
  validateBody(updateFavoriteField), asyncMiddleware(controller.updateStatusContact));

module.exports = router;
