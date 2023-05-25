const { videogame,genre } = require("../../../db")


const putVideogame = async (id, update) => {
    console.log(update);
    await videogame.update(update, { where: { id: id } })
    const videogameEdited = await videogame.findByPk(id)
    await videogameEdited.setGenres([])
    let dbGenres = await genre.findAll({where:{name: update.genres}})
    await videogameEdited.addGenres(dbGenres)
    return videogameEdited
}


module.exports = putVideogame;