const { videogame } = require("../../../db")


const putVideogame = async (id, update) => {
    const response = await videogame.update(update, { where: { id: id } })
    return response
}


module.exports = putVideogame;