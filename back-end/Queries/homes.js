const { default: axios } = require("axios")
const db = require("../db/dbConfig")

const getAllhomes = async () => {
try {
    const homes = await db.any("SELECT * FROM homes")
    return homes
} catch (error) {
   return error 
}
}

const getOneHome = async (id) => {
    try {
        const home = await db.one("SELECT * FROM homes WHERE id=$1", id);
        return home
    } catch (error) {
        return error
    }
}

const createHome = async (home) => {
    const {address, state, number_of_bathrooms, number_of_bedrooms, price, parking, property_type, saved, image} = home
    try {
        const create = await db.one(
            "INSERT INTO homes (address, state, number_of_bathrooms,number_of_bedrooms, price, parking, property_type, saved, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
            [address, state, number_of_bathrooms,number_of_bedrooms, price, parking, property_type, saved, image]
        )
        return create
    } catch (error) {
        return error
    }
}

const deleteHome = async (id) => {
    try {
        const removeHome = await db.one("DELETE FROM homes WHERE id=$1 RETURNING *", id);
        return removeHome
    } catch (error) {
        return error
    }
}

const updateHome = async (id, home) => {
    const {address, state, number_of_bathrooms, number_of_bedrooms, price, parking, property_type, saved, image} = home
    try {
        const updateHome = await db.one("UPDATE homes SET address=$1, state=$2, number_of_bathrooms=$3, number_of_bedrooms=$4, price=$5, parking=$6, property_type=$7, saved=$8, image=$9 where id=$10 RETURNING * ",
        [address, state, number_of_bathrooms, number_of_bedrooms, price, parking, property_type, saved, image, id]
        )
        return updateHome
    } catch (error) {
        return error
    }
}
module.exports = {getAllhomes, getOneHome, createHome, deleteHome, updateHome}