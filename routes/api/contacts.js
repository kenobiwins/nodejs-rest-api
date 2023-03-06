const express = require("express");

const controller = require("../../controllers/contacts");
const validateBody = require("../../middlewares/validateBody");
const {
  addContactSchema,
  updateContactSchema,
} = require("../../schemas/schemasContacts");
const asyncMiddleware = require("../../helpers/asyncMiddleware");

const router = express.Router();

router.get("/", asyncMiddleware(controller.getAllContacts));
router.get("/:contactId", asyncMiddleware(controller.getContact));
router.post(
  "/",
  validateBody(addContactSchema, "missing required name field"),
  asyncMiddleware(controller.postContact)
);
router.delete("/:contactId", asyncMiddleware(controller.deleteContact));
router.put(
  "/:contactId",
  validateBody(updateContactSchema),
  asyncMiddleware(controller.putContact)
);

module.exports = router;
