const { Videogame } = require("../../../db")


const createVideogame = async (name, description, platforms, image, release_date, rating) =>
    await Videogame.create({ name, description, platforms, image, release_date, rating })


module.exports = { createVideogame }