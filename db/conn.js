const { Sequelize } = require('sequelize')

const dotenv = require('dotenv').config()

const dbName = process.env.DB_DATABASE
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbHost = process.env.DB_HOST
const dbDialect = process.env.DB_DIALECT

const sequelize = new Sequelize(
  `${dbDialect}://${dbUser}:${dbPassword}@${dbHost}/${dbName}?ssl=true`,
  {
    dialect: dbDialect,
  }
)

try {
  sequelize.authenticate()
  console.log('Database connected')
} catch (error) {
  console.log(error)
}

module.exports = sequelize