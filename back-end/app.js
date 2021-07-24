// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const homeController = require("./Controllers/homeController")

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON
app.use("/homes",homeController)

// ROUTES
app.get("/", (req, res) => {
  res.send("Homes for Rich people...ONLY");
});

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found")
})




const db = require("./db/dbConfig.js");



// EXPORT
module.exports = app;
