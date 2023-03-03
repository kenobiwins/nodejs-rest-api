const express = require("express");

const controller = require("../../controllers/contacts");

const router = express.Router();

router.get("/", controller.getAllContacts);
router.get("/:contactId", controller.getContact);
router.post("/", controller.postContact);
router.delete("/:contactId", controller.deleteContact);
router.put("/:contactId", controller.putContact);

module.exports = router;
