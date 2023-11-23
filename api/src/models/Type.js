const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define ('Type', {
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
    })
}
