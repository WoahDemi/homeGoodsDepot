// DEPENDENCIES
const cors = require("cors");
const express = require("express");
// const homeController = require("./Controllers/homeController")

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
// app.get("/homes", async (req, res) => {
//   try {
//     const allHomes = await db.any("SELECT * FROM homes");
//     res.json(allHomes);
//   } catch (err) {
//     res.json(err);
//   }
// });


const db = require("./db/dbConfig.js");



// EXPORT
module.exports = app;
