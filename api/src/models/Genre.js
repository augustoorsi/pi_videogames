//MODULO DEL MODELO GENRES

const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('genre', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    }, { timestamps: false });
};