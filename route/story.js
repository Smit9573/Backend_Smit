let express = require('express')
const router = express.Router()

const {story} = require('../controller/index')

router.post('/',story.creatStory )
router.get('/', story.getStory)
router.put('/', story.updateStory)
router.delete('/', story.deleteStory)

module.exports = router