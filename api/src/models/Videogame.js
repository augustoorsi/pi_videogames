//MODULO DEL MODELO VIDEOGAMES.
const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Videogame', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    release_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    rating: {
      type: DataTypes.DECIMAL(3, 2),
      allowNull: true,
      defaultValue: 0.00,
      validate: {
        min: 0.00,
        max: 5.00,
      }
    },
    created_db: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, { timestamps: false });
};
