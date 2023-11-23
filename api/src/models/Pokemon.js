const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Pokemon", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      imagen: {
        type: DataTypes.STRING,
      },
      vida: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ataque: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      defensa: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      velocidad: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      altura: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      peso: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }})}

