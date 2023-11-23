const axios = require ('axios');

const getPokemons = async (req,res) => {
    try{
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const pokemons = response.data.results
        console.log(pokemons)
        res.status(200).json(pokemons);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({message : error.message})
    }
}

module.exports = {getPokemons};
