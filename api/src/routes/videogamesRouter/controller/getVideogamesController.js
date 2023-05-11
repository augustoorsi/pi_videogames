const { Videogame, Genre } = require("../../../db")
const URL = `https://api.rawg.io/api/games`
const { API_KEY } = process.env
const axios = require("axios")


const getApiVideogames = async (id) => {
    if(id){
        const { data } = await axios.get(`${URL}/${id}?key=${API_KEY}`)
        const results = data
        const videogame = {
            id: results.id,
            name: results.name,
            image: results.background_image,
            genres: results.genres.map(genre => genre.name)
        }
        console.log(videogame);
        return videogame
    }
    else{
        const apiVideogames = [];
        let page = 1;
        while (apiVideogames.length < 100) {
            const { data } = await axios.get(`${URL}?key=${API_KEY}&page=${page}`);
            const results = data.results;
            const videogames = results.map(videogame => {
                return {
                    id: videogame.id,
                    name: videogame.name,
                    image: videogame.background_image,
                    genres: videogame.genres.map(genre => genre.name)
                }
            })
            apiVideogames.push(...videogames);
            page++;
        }
        return apiVideogames
    }
}


const getDbVideogames = async (id) => {
    if(id){
        const dbVideogame = await Videogame.findAll({
            where: {id: id},
            attributes: ['id', 'name', 'image'],
            include: {
                model: Genre,
                attributes: ['name'],
                through: {
                    attributes: []
                },
            }
        })
        console.log(dbVideogame[0].dataValues);
        return dbVideogame[0].dataValues
    }
    else{
        const dbVideogames = await Videogame.findAll({
            attributes: ['id', 'name', 'image'],
            include: {
                model: Genre,
                attributes: ['name'],
                through: {
                    attributes: []
                },
            }
        })
        const videogames = await dbVideogames.map(dbvideogame => dbvideogame.dataValues)
        console.log(videogames);
        return videogames
    }
}


const getAllVideogames = async () => {
    const dbVideogames = await getDbVideogames()
    const apiVideogames = await getApiVideogames()
    const allVideogames = [...dbVideogames, ...apiVideogames]
    console.log(allVideogames.length);
    return allVideogames
}

const getVideogamesByName = async (name) => {
    const allVideogames = await getAllVideogames()
    const videogameByName = allVideogames.filter(videogame => videogame.name.toLowerCase().includes(name.toLowerCase()))
    return videogameByName.slice(0,15)
}

const getVideogameByID = async (id) =>{
    if(!isNaN(id))return await getApiVideogames(id)
    console.log(!isNaN(id));
    return await getDbVideogames(id)
}



getVideogameByID("25ba4023-8c14-4cd9-8263-759b1a3f8d5b")



module.exports = { getApiVideogames, getDbVideogames, getAllVideogames, getVideogamesByName, getVideogameByID };