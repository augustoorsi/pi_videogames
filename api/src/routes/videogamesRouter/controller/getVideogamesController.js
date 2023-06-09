const { videogame, genre } = require("../../../db")
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
            platforms: results.platforms,
            description: results.description,
            released: results.released,
            rating: results.rating,
            genres: results.genres.map(genre => genre.name),
        }
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
                    genres: videogame.genres.map(genre => genre.name),
                    rating: videogame.rating
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
        const dbVideogame = await videogame.findAll({
            where: {id: id},
            attributes: ['id', 'name', 'image', 'created_db', 'rating','released', 'description','platforms'],
            include: {
                model: genre,
                attributes: ['name'],
                through: {
                    attributes: []
                },
            }
        })
        return dbVideogame[0].dataValues
    }
    else{
        const dbVideogames = await videogame.findAll({
            attributes: ['id', 'name', 'image', 'created_db', 'rating','released'],
            include: {
                model: genre,
                attributes: ['name'],
                through: {
                    attributes: []
                },
            }
        })
        let videogames = await dbVideogames.map(dbvideogame => dbvideogame.dataValues)
        videogames.genres = videogames.map(videogame=> videogame.genres.map(genre=> genre.dataValues.name)).flat()
        console.log(videogames);
        return videogames
    }
}


const getAllVideogames = async () => {
    const dbVideogames = await getDbVideogames()
    const apiVideogames = await getApiVideogames()
    const allVideogames = [...dbVideogames, ...apiVideogames]
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




module.exports = { getApiVideogames, getDbVideogames, getAllVideogames, getVideogamesByName, getVideogameByID };