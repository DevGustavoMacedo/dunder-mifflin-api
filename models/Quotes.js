const { DataTypes } = require('sequelize')

const db = require('../db/conn')
const Characters = require('./Characters')

const Quotes = db.define('quotes', {
  quote: {
    type: DataTypes.STRING(500),
    allowNull: false,
    required: true
  }
})

Quotes.belongsTo(Characters)
Characters.hasMany(Quotes)

module.exports = Quotes