const { Router } = require("express");
const { getVideogamesHandler, getByIDVideogamesHandler, postVideogamesHandler, deleteVideogamesHandler, putVideogameHandler } = require("./handler/VideogamesHandler");


const videogamesRouter = Router()

videogamesRouter.get("/", getVideogamesHandler)

videogamesRouter.get("/:id", getByIDVideogamesHandler)

videogamesRouter.post("/", postVideogamesHandler)

videogamesRouter.delete("/:id", deleteVideogamesHandler)

videogamesRouter.put("/:id", putVideogameHandler)

module.exports = videogamesRouter;