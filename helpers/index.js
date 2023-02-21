const Nicknames = require('../models/Nicknames')
const Characters = require('../models/Characters')
const Quotes = require('../models/Quotes')
const Seasons = require('../models/Seasons')

const formatArray = (characters) =>
  characters.map((item) => {
    delete item.id

    const character = {}

    Object.entries(item).forEach((entry) => {
      const [key, value] = entry

      if (key === 'id') {
        return
      }

      if (Array.isArray(value)) {
        character[key] = value.map((val) => Object.values(val.dataValues)[0])
        return
      }

      character[key] = value
    })

    return character
  })

const arrayToString = (arr) => (Array.isArray(arr) ? arr[0] : arr)

const paramFindDontExists = (path, find) => (path !== '/all' && !find ? true : false)

const queriesExists = (path, queries) => {
  if (path !== '/all' && queries.length > 1) {
    return true
  }

  if (path === '/all' && queries.length > 0) {
    return true
  }

  return false
}

const queriesFilter = (attributesList, queries) =>
  queries.filter((key) => attributesList.includes(key))

const wrongParams = (path, attributes, multAttributes) =>
  attributes.length === 0 && multAttributes.length === 0 && path !== '/one' ? true : false

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

const dataDontExists = async (find) => {
  const [key, value] = Object.entries(find)[0]

  const Model = key === 'season' ? Seasons : Characters

  const search = await Model.findOne({
    attributes: [key],
    where: { [key]: value },
  })

  return search ? false : true
}

module.exports = {
  formatArray,
  arrayToString,
  paramFindDontExists,
  queriesExists,
  queriesFilter,
  wrongParams,
  formatToModels,
  dataDontExists,
}
