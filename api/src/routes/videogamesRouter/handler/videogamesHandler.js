const { createVideogame } = require("../controller/postVideogameController")
const { getAllVideogames, getVideogamesByName, getVideogameByID } = require("../controller/getVideogamesController")
const deleteVideogame = require("../controller/deleteVideogamesController")
const putVideogame = require("../controller/putVideogameController")

const getVideogamesHandler = async (req, res) => {
    const { name } = req.query
    const allVideogames = await getAllVideogames()
    try {
        if (name) {
            videogamesByName = await (await getVideogamesByName(name))
            res.status(200).json(videogamesByName)
        }
        else res.status(200).json(allVideogames)
    } catch (error) {
        console.log({ error: error.message });
        res.status(400).json({ error: error.message })
    }
}

const getByIDVideogamesHandler = async (req, res) => {
    let { id } = req.params
    id = "" + id
    try {
        videogameById = await getVideogameByID(id)
        res.status(200).send(videogameById)
    } catch (error) {
        console.log({ error: error.message });
        res.status(400).json({ error: error.message })
    }
}

const postVideogamesHandler = async (req, res) => {
    try {
        const { name, image, platforms, description, released, rating, genres } = req.body
        const newVideogame = await createVideogame(name, image, platforms, description, released, rating, genres)
        res.status(201).json(newVideogame)
    } catch (error) {
        console.log({ error: error.message });
        res.status(400).json({ error: error.message })

    }
}

const deleteVideogamesHandler = async (req, res) => {
    let { id } = req.params
    id = "" + id
    try {
        const response = await deleteVideogame(id)
        res.status(200).send(response)
    } catch (error) {
        console.log({ error: error.message });
        res.status(400).json({ error: error.message })
    }
}

const putVideogameHandler = async (req, res) => {
    let { id } = req.params
    id = "" + id
    const { name, image, description, platforms, released, rating, genres } = req.body
    try {
        const videogameEdited = await putVideogame(id, { name, image, description, platforms, released, rating, genres})
        res.status(200).send(videogameEdited)
    } catch (error) {
        console.log({ error: error.message });
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getVideogamesHandler,
    getByIDVideogamesHandler,
    postVideogamesHandler,
    deleteVideogamesHandler,
    putVideogameHandler
}