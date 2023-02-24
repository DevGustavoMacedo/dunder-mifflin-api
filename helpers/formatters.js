const Nicknames = require('../models/Nicknames')
const Characters = require('../models/Characters')
const Quotes = require('../models/Quotes')
const Seasons = require('../models/Seasons')

const formatArrayDB = (characters) =>
  characters.map((item) => {
    delete item.id

    const character = {}

    Object.entries(item).forEach((entry) => {
      const [key, value] = entry

      if (Array.isArray(value)) {
        character[key] = value.map((val) => Object.values(val.dataValues)[0])
        return
      }

      character[key] = value
    })

    return character
  })

const arrayToString = (arr) => (Array.isArray(arr) ? arr[0] : arr)

const queriesFilter = (attributesList, queries) =>
  queries.filter((key) => attributesList.includes(key))

const formatToModels = (multAttributes, path) => {
  const formattedAttributes = multAttributes.map((item) => {
    const model = item === 'seasons' ? Seasons : item === 'nicknames' ? Nicknames : Quotes

    return {
      model,
      separate: true,
      attributes: [item.substring(0, item.length - 1)],
    }
  })

  return formattedAttributes
}

const charactersData = async (query, key) => {
  const { attributes, multAttributes } = query
  let { find } = query

  if (key === 'id') {
    find = await Seasons.findAll({
      where: { season: find },
      attributes: ['characterId'],
      raw: true,
    }).then((data) => data.map((item) => item.characterId))
  }

  const where = key ? { [key]: find } : {}

  const data = await Characters.findAll({
    attributes,
    where,
    include: multAttributes,
  })
    .then((data) => data.map((item) => item.dataValues))
    .then((characters) => formatArrayDB(characters))

  return data
}

module.exports = {
  arrayToString,
  queriesFilter,
  formatToModels,
  charactersData,
}
