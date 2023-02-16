const { DataTypes } = require('sequelize')

const db = require('../db/conn')
const Characters = require('./Characters')

const Aliases = db.define('aliases', {
  alias: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true
  }
})

Aliases.belongsTo(Characters)
Characters.hasMany(Aliases)

module.exports = Aliases