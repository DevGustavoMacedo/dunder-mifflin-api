const Podcast = require('../models/Podcast')

const getAllEpisodes = async (req, res) => {
  const { attributes } = req.query

  const episodesData = await Podcast.findAll({ raw: true, attributes })
  .then((data) => data.map(item => item))

  return res.status(200).json(episodesData)
}

const getOneEpisode = async (req, res) => {
  const { find, attributes } = req.query

  const episode = await Podcast.findOne({
    where: { chapter: find },
    attributes,
    raw: true,
  }).then((data) => data ? [data] : [])

  if (episode.length === 0) {
    return res.status(404).json({ error: 'Chapter does not exist!' })
  }

  return res.status(200).json(episode)
}

module.exports = {
  getAllEpisodes,
  getOneEpisode,
}
