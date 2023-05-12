const { genre } = require("../../../db")
const URL = `https://api.rawg.io/api/games`
const { API_KEY } = process.env
const axios = require("axios");
const { getApiVideogames } = require("../../videogamesRouter/controller/getVideogamesController");

//ESTA FUNCION CARGA TODOS LOS GENEROS EN LA BASE DE DATOS Y SE EJECUTA EN EL index.js CUANDO SE INICIA EL SERVER:
const getAllGenres = async () => {
    const apiVideogames = await getApiVideogames()
    const genres = apiVideogames.map(videogame => videogame.genres).flat()
    genres.forEach(gen => genre.findOrCreate({ where: { name: gen } }))
    let allGenres = await genre.findAll()
    allGenres = allGenres.map(genre => genre.dataValues.name)
    return allGenres
}

module.exports = { getAllGenres };