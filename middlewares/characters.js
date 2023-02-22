// helpers
const {
  paramFindDontExists,
  queriesExists,
  wrongParams,
} = require('../helpers/checkers')

const {
  arrayToString,
  queriesFilter,
  formatToModels,
} = require('../helpers/formatters')

const middleware = (req, res, next) => {
  const queries = Object.keys(req.query)
  const find = arrayToString(req.query.find)
  const path = req.path

  if (paramFindDontExists(path, find)) {
    return res.status(404).json({ error: 'Fill the parameter: {find}' })
  }

  let attributes = ['name', 'image', 'portrayed', 'brand', 'trivia', 'firstEp', 'staff']

  let multAttributes = ['seasons', 'quotes', 'nicknames']

  if (queriesExists(path, queries)) {
    attributes = queriesFilter(attributes, queries)
    multAttributes = queriesFilter(multAttributes, queries)
  }

  if (wrongParams(path, attributes, multAttributes)) {
    return res.status(404).json({ error: 'Wrong parameter(s)!' })
  }

  multAttributes = formatToModels(multAttributes, path)

  req.query = {
    find,
    attributes: ['name', ...attributes],
    multAttributes,
  }

  next()
}

module.exports = middleware
