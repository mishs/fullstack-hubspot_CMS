require("dotenv").config();
const express = require("express");
const cors = require("cors");
const hubspot = require("@hubspot/api-client");
const contactRouter = require("./routes/contactsRoutes");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/contacts", contactRouter);

app.get("/", (req, res) => {
  res.send("Application is working fine");
});

// Listening to the server

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
