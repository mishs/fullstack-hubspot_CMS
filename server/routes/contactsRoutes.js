const express = require("express");
const ContactController = require("../controllers/contactsController");

const contactRouter = express.Router();

contactRouter.get("/", ContactController.getContacts);
contactRouter.post("/create", ContactController.createContact);
contactRouter.put("/edit", ContactController.updateContact);
contactRouter.delete("/:contactId", ContactController.deleteContact);

module.exports = contactRouter;
