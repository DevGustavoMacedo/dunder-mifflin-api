// models
const Characters = require('../models/Characters')
const Seasons = require('../models/Seasons')

// helpers
const { formatArray } = require('../helpers')

const getAllCharacters = async (req, res) => {
  const { attributes, multAttributes } = req.query

  const charactersData = await Characters.findAll({
    attributes,
    include: multAttributes,
  })
    .then((data) => data.map((item) => item.dataValues))
    .then((characters) => formatArray(characters))

  return res.status(200).json(charactersData)
}

const getOneCharacter = async (req, res) => {
  const { find, attributes, multAttributes } = req.query

  const charactersData = await Characters.findOne({
    attributes,
    where: { name: find },
    include: multAttributes,
  })
    .then((data) => [data.dataValues])
    .then((characters) => formatArray(characters))

  return res.status(200).json(charactersData)
}

const getCharactersSeason = async (req, res) => {
  const { find, attributes, multAttributes } = req.query

  const data = await Seasons.findAll({
    where: { season: find },
    attributes: ['season'],
    include: [{ model: Characters, attributes, include: multAttributes }],
  })
    .then((data) => data.map((item) => item.character.dataValues))
    .then((characters) => formatArray(characters))

  return res.status(200).json(data)
}

const getCharactersBrand = async (req, res) => {
  const { find, attributes, multAttributes } = req.query

  const charactersData = await Characters.findAll({
    attributes,
    where: { brand: find },
    include: multAttributes,
  })
    .then((data) => data.map((item) => item.dataValues))
    .then((characters) => formatArray(characters))

  return res.status(200).json(charactersData)
}

const getCharactersStaff = async (req, res) => {
  const { find, attributes, multAttributes } = req.query

  const charactersData = await Characters.findAll({
    attributes,
    where: { staff: find },
    include: multAttributes,
  })
    .then((data) => data.map((item) => item.dataValues))
    .then((characters) => formatArray(characters))

  return res.status(200).json(charactersData)
}

module.exports = {
  getAllCharacters,
  getOneCharacter,
  getCharactersSeason,
  getCharactersStaff,
  getCharactersBrand,
}
