const express = require("express");
const homes = express.Router()
const {getAllHomes} = require("../Queries/homes")



homes.get("/", async(req,res)=>{
const allHomes = await getAllHomes()
res.json(allHomes)
})


module.exports = homeController;