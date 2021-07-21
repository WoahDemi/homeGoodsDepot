const express = require("express");
const homes = express.Router()
const {getAllhomes} = require("../Queries/homes")



homes.get("/", async(req,res)=>{
const allHomes = await getAllhomes()
res.json(allHomes)
})


module.exports = homes;