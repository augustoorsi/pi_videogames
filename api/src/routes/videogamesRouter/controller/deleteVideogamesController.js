const { videogame} = require("../../../db")


const deleteVideogame = async(id) =>{
    await videogame.destroy({where:{ id: id}})
    const message = "Videogame Deleted"
    return message
}


module.exports= deleteVideogame;