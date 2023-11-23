require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const pokemonMdl = require('./models/Pokemon.js');
const typeMdl = require('./models/Type.js');

//Inicio la base de datos
const sequelize = new Sequelize(    
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemon`,
   {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
   }
);

pokemonMdl(sequelize);
typeMdl(sequelize);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Pokemon, Type} = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Pokemon.belongsToMany(Type, {through: 'pokemon_type'});
Type.belongsToMany(Pokemon, {through: 'pokemon_type'});


module.exports = {
   ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
   conn: sequelize, // para importart la conexión { conn } = require('./db.js');
   
};
