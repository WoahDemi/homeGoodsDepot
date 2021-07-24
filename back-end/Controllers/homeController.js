const express = require("express");
const homes = express.Router()
const {getAllhomes, getOneHome, createHome, deleteHome, updateHome} = require("../Queries/homes")



homes.get("/", async (req,res ) => {
    const allHomes = await getAllhomes()
    res.json(allHomes)
})

homes.get("/:id", async (req, res) => {
    const {id} = req.params
    try {
        const oneHome = await getOneHome(id)
        if (oneHome["id"]) {
            res.json(oneHome)
        } else {
            console.log(`Database error: ${oneHome}`)
            throw `There is no home with id: ${id}`
        }
    } catch (error) {
        res.status(404).json({error: "Resource not found.", message: error})
    }

})

homes.post("/", async (req, res) => {
    const home = req.body
    try {
        const newHome = await createHome(home)
        if (newHome["id"]) {
            res.json(newHome)
        } else {
            console.log(`Database error: ${newHome}`)
            throw ("Error adding" + home + " to the database")
        }
    } catch (error) {
        res.status(404).json({error:error})
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