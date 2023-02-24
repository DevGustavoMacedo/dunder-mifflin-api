const Characters = require('../models/Characters')
const Seasons = require('../models/Seasons')

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

const wrongParams = (path, attributes, multAttributes) =>
  attributes.length === 0 && multAttributes.length === 0 && path !== '/one' ? true : false

module.exports = {
  paramFindDontExists,
  queriesExists,
  wrongParams,
}
