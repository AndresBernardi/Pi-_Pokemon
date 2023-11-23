const {Router} = require('express');
const pokemonRouter = Router();

const {getPokemons} = require('../handlers/getPokemons.js')


pokemonRouter.get('/', getPokemons)

module.exports = pokemonRouter;