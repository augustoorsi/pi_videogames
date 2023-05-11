const { Router } = require("express");
const videogamesRouter = require("./videogamesRouter/videogamesRouter")
const genresRouter = require("./genresRouter/genresRouter")
const router = Router()

router.use("/videogames", videogamesRouter);
router.use("/genres", genresRouter)


module.exports = router;














































// const { Router } = require('express');
// // Importar todos los routers;
// // Ejemplo: const authRouter = require('./auth.js');


// const router = Router();

// // Configurar los routers
// // Ejemplo: router.use('/auth', authRouter);


// module.exports = router;
