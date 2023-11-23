const axios = require ('axios');
const Pokemon = require('../models/Pokemon.js');

const getPokemonsById = async (req,res) => {
    const id = req.params.id;
    try {
        let pokemon;
        pokemon = await Pokemon.findByPk(id);
        
        if (!pokemon){
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            pokemon = response.data;
            await Pokemon.create(pokemon)
        }
        res.status(200).json(pokemon);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({message : error.message})
    }
}

module.exports = {getPokemonsById};