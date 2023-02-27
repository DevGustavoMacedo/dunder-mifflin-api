// helpers
const {
  queriesExists,
  paramFindDontExists,
} = require('../helpers/checkers')

const {
  arrayToString,
  queriesFilter,
} = require('../helpers/formatters')

const middleware = (req, res, next) => {
  const queries = Object.keys(req.query)
  const find = arrayToString(req.query.find)
  const path = req.path

  if (paramFindDontExists(path, find)) {
    return res.status(404).json({ error: 'Fill the parameter: {find}' })
  }

  let attributes = ['episode', 'title', 'link']

  if (queriesExists(path, queries)) {
    attributes = queriesFilter(attributes, queries)
  }

  if (attributes.length === 0) {
    return res.status(404).json({ error: 'Wrong parameter(s)!' })
  }

  req.query.attributes = attributes

  return next()
}

module.exports = middleware
