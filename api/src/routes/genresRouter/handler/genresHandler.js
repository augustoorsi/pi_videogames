const { getAllGenres } = require("../controller/genresController");


const getGenresHandler = async (req, res) => {
    try {
        const allGenres = await getAllGenres()
        res.status(200).send(allGenres)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = getGenresHandler;