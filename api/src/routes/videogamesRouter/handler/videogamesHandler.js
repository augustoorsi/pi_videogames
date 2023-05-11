const { createVideogame } = require("../controller/postVideogameController")
const { getAllVideogames, getVideogamesByName, getVideogameByID } = require("../controller/getVideogamesController")

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
        res.status(400).json({ error: error.message })
    }
}

const getByIDVideogamesHandler = async (req, res) => {
    let { id } = req.params
    id = ""+id
    try {
        videogameById = await getVideogameByID(id)
        res.status(200).send(videogameById)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const postVideogamesHandler = async (req, res) => {
    try {
        const { name, description, platforms, image, release_date, rating } = req.body
        const newVideogame = await createVideogame(name, description, platforms, image, release_date, rating)
        res.status(201).json(newVideogame)
    } catch (error) {
        res.status(400).json({ error: error.message })

    }
}

module.exports = {
    getVideogamesHandler,
    getByIDVideogamesHandler,
    postVideogamesHandler
}