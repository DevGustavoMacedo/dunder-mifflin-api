const Podcast = require('../models/Podcast')

const getAllEpisodes = async (req, res) => {
  const episodesData = await Podcast.findAll({ raw: true }).then((data) =>
    data.map((item) => ({
      title: item.title,
      link: item.link,
    }))
  )

  return res.status(200).json(episodesData)
}

const getOneEpisode = async (req, res) => {
  if (!req.query.title) {
    return res.status(404).json({ error: 'Enter the {title} parameter!' })
  }

  const title = req.query.title.replace(/([a-z])([A-Z])/g, '$1 $2')

  const episode = await Podcast.findOne({
    where: { title },
    attributes: ['title', 'link'],
    raw: true,
  })

  if (!episode) {
    return res.status(404).json({ error: 'Title does not exist!' })
  }

  return res.status(200).json(episode)
}

module.exports = {
  getAllEpisodes,
  getOneEpisode,
}
