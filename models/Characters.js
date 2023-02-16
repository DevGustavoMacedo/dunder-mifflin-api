const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Characters = db.define('characters', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  staff: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  portrayed: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  firstEp: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  trivia: {
    type: DataTypes.STRING(500),
    allowNull: false,
    required: true,
  },
})

module.exports = Characters
