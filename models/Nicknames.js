const { DataTypes } = require('sequelize')

const db = require('../db/conn')
const Characters = require('./Characters')

const Nicknames = db.define('nicknames', {
  nickname: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true
  }
})

Nicknames.belongsTo(Characters)
Characters.hasMany(Nicknames)

module.exports = Nicknames