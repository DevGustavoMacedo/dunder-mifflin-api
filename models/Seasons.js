const { DataTypes } = require('sequelize')

const db = require('../db/conn')
const Characters = require('./Characters')

const Seasons = db.define('seasons', {
  season: {
    type: DataTypes.INTEGER, 
    allowNull: false,
    required: true
  }
})

Seasons.belongsTo(Characters)
Characters.hasMany(Seasons)

module.exports = Seasons