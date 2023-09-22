const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routes/contact.route");

const app = express();

app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded


app.get("/", (req, res) => {
    res.json({ messeage: "Welcome to contact book application"});
});

app.use("/api/contacts", contactsRouter);

module.exports = app;