const { videogame } = require("../../../db")


const createVideogame = async (name, description, platforms, image, release_date, rating) =>
    await videogame.create({ name, description, platforms, image, release_date, rating })


module.exports = { createVideogame }