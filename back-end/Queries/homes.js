const { default: axios } = require("axios")
const db = require("../db/dbConfig")

const getAllhomes = async() =>{
try {
    const homes = await db.any("SELECT * FROM homes")
    return homes
} catch (error) {
   console.log(error) 
}
}


module.exports = {getAllhomes}