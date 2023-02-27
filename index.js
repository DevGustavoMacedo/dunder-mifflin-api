// imports
const express = require('express')
const cors = require('cors')

const app = express()

const conn = require('./db/conn')

// models
const Characters = require('./models/Characters')
const Podcast = require('./models/Podcast')
const Nicknames = require('./models/Nicknames')
const Quotes = require('./models/Quotes')
const Seasons = require('./models/Seasons')

// receber resposta do body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// configurando o rate limit
const rateLimiter = require('./middlewares/rateLimiter')
app.use(cors(), rateLimiter)

// rotas (colocar rotas sempre no final)
const charactersRoutes = require('./routes/charactersRoutes')
const podcastRoutes = require('./routes/podcastRoutes');

app.use('/characters', charactersRoutes)
app.use('/podcast', podcastRoutes)

app.use('/', (req, res) => res.status(404).json({ error: 'Endpoint does not exist!' }))

conn
  .sync()
  .then(() => app.listen(process.env.PORT || 4000))
  .catch((error) => console.log(error))
