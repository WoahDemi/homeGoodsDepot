const express = require("express");
const homes = express.Router()
const {getAllhomes, getOneHome, createHome, deleteHome, updateHome} = require("../Queries/homes")



homes.get("/", async (req,res ) => {
    const allHomes = await getAllhomes()
    res.json(allHomes)
})

homes.get("/:id", async (req, res) => {
    const {id} = req.params
    const oneHome = await getOneHome(id)
    res.json(oneHome)

})

homes.post("/", async (req, res) => {
    const home = req.body
    console.log(home)
    try {
        const newHome = await createHome(home)
        res.json(newHome)
    } catch (error) {
        res.status(404).json({error:"Error"})
    }
})

homes.put("/:id", async (req, res) => {
    const {id} = req.params
    const home = req.body
    try {
        const update = await updateHome(id, home)
        res.json(update)
    } catch (error) {
        console.log(error)
    }
})

homes.delete("/:id", async (req, res) => {
    const {id} = req.params
    try {
        const removeHome = await deleteHome(id)
        res.json(removeHome)
    } catch (error) {
        console.log(error)
    }
})






module.exports = homes;