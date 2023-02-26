// helpers
const { charactersData } = require('../helpers/formatters')

const getAllCharacters = async (req, res) => 
  res.status(200).json(await charactersData(req.query))

const getOneCharacter = async (req, res) => {
  req.query.find = req.query.find.replace(/([a-z])([A-Z])/, '$1 $2')

  const data = await charactersData(req.query, 'name')

  if(data.length === 0 ) {
    return res.status(404).json({ error: 'Name does not exist!' })
  }

  return res.status(200).json(data)
}

const getCharactersBrand = async (req, res) => {
  const data = await charactersData(req.query, 'brand')

  if(data.length === 0 ) {
    return res.status(404).json({ error: 'Brand does not exist!' })
  }

  return res.status(200).json(data)
}

const getCharactersStaff = async (req, res) => {
  const data = await charactersData(req.query, 'staff')

  if(data.length === 0 ) {
    return res.status(404).json({ error: 'Staff does not exist!' })
  }

  return res.status(200).json(data)
}

const getCharactersSeason = async (req, res) => {
  const data = await charactersData(req.query, 'id')

  if(data.length === 0 ) {
    return res.status(404).json({ error: 'Season does not exist!' })
  }

  return res.status(200).json(data)
}

module.exports = {
  getAllCharacters,
  getOneCharacter,
  getCharactersSeason,
  getCharactersStaff,
  getCharactersBrand,
}
