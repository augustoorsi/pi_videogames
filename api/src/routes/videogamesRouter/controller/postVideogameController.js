const { videogame, genre } = require("../../../db")


const createVideogame = async (name, image, platforms, description, released, rating, genres ) =>{

    let newVideogame = await videogame.create({ name, image, platforms, description, released, rating})
    let dbGenres = await genre.findAll({where:{name: genres}})
    newVideogame.addGenre(dbGenres)
    return newVideogame
}
module.exports = { createVideogame }