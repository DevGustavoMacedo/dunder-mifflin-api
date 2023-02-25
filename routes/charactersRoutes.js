const router = require('express').Router()

const middleware = require('../middlewares/characters')

const {
  getAllCharacters,
  getOneCharacter,
  getCharactersBrand,
  getCharactersSeason,
  getCharactersStaff,
} = require('../controllers/CharactersController')

router.use('/', middleware)

router.get('/all', getAllCharacters)
router.get('/one', getOneCharacter)
router.get('/season', getCharactersSeason)
router.get('/staff', getCharactersStaff)
router.get('/brand', getCharactersBrand)

module.exports = router
