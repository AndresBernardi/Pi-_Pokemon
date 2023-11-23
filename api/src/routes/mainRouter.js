const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const mainRouter = Router();
const pokemonsRouter = require('./pokemonsRouter.js');

mainRouter.use('/pokemons', pokemonsRouter);

module.exports = mainRouter;

