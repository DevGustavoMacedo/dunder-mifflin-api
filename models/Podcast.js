const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Podcast = db.define('podcast', {
  episode: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true
  }
})

module.exports = Podcast
