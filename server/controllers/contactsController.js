const hubspot = require("@hubspot/api-client");

const hubspotClient = new hubspot.Client({
  accessToken: process.env.HUBSPOT_ACCESS_TOKEN,
});

class ContactController {
  async getContacts(req, res, next) {
    const limit = 100;
    const properties = ["firstname", "lastname", "email", "birthday"];

    try {
      const apiResponse = await hubspotClient.crm.contacts.basicApi.getPage(
        limit,
        undefined,
        properties,
        undefined,
        undefined,
        false
      );
      res.status(200).json({
        data: apiResponse.results?.reverse(),
      });
    } catch (e) {
      console.log(e);
      res.status(404).json({
        message: e?.message,
      });
    }
  }

  async createContact(req, res, next) {
    const { email, firstname, lastname, birthday } = req.body;
    console.log(req.body, "req.body");

    if (!email || !firstname || !lastname || !birthday) {
      return res.status(400).json({
        message: "Please provude all the fields",
      });
    }

    const properties = {
      email,
      firstname,
      lastname,
      birthday,
    };
    const SimplePublicObjectInput = { properties };

    try {
      const apiResponse = await hubspotClient.crm.contacts.basicApi.create(
        SimplePublicObjectInput
      );
      console.log(apiResponse);
      res.status(200).json({
        data: apiResponse,
      });
    } catch (e) {
      console.log(e?.body, "e");
      res.status(404).json({
        message: e?.body.message,
      });
    }
  }

  async updateContact(req, res, next) {
    const { email, firstname, lastname, birthday, id } = req.body;

    console.log(req.body, "req");

    if (!id) {
      return res.status(400).json({
        message: "Please provide the contact id",
      });
    }

    if (!email || !firstname || !lastname || !birthday) {
      return res.status(400).json({
        message: "Please provude all the fields",
      });
    }

    const properties = {
      email,
      firstname,
      lastname,
      birthday,
    };
    const SimplePublicObjectInput = { properties };

    try {
      const apiResponse = await hubspotClient.crm.contacts.basicApi.update(
        id,
        SimplePublicObjectInput
      );
      console.log(apiResponse);
      res.status(200).json({
        data: apiResponse,
      });
    } catch (e) {
      console.log(e?.body, "e");
      res.status(404).json({
        message: e?.message,
      });
    }
  }

  async deleteContact(req, res, next) {
    const { contactId } = req.params;

    if (!contactId) {
      return res.status(400).json({
        message: "Please provide the contact id",
      });
    }
    try {
      const apiResponse = await hubspotClient.crm.contacts.basicApi.archive(
        contactId
      );
      console.log(apiResponse);
      res.status(200).json({
        data: "Contact has been deleted successfully",
      });
    } catch (e) {
      console.log(e?.body, "e");
      res.status(404).json({
        message: e?.body.message,
      });
    }
  }
}

module.exports = new ContactController();
