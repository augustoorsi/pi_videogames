const { Router } = require("express");
const { getVideogamesHandler, getByIDVideogamesHandler, postVideogamesHandler } = require("./handler/VideogamesHandler")

const videogamesRouter = Router()

videogamesRouter.get("/", getVideogamesHandler)

videogamesRouter.get("/:id", getByIDVideogamesHandler)

videogamesRouter.post("/", postVideogamesHandler)

module.exports = videogamesRouter;