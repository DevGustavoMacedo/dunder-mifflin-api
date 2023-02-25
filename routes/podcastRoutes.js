const router = require('express').Router()

const { getAllEpisodes, getOneEpisode } = require('../controllers/PodcastController')

const middleware = require('../middlewares/podcast')

router.use('/', middleware)

router.get('/all', getAllEpisodes)
router.get('/one', getOneEpisode)

module.exports = router
