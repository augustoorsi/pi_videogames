const { Router } = require("express")
const getGenresHandler = require("./handler/genresHandler")

const genresRouter = Router()

genresRouter.get("/", getGenresHandler)

module.exports = genresRouter;