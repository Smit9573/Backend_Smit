let express = require('express')
const router = express.Router()

const {person} = require('../controller/index')

router.post('/',person.creatPerson )
router.get('/', person.getPerson)
router.put('/', person.updatePerson)
router.delete('/', person.deletePerson)

module.exports = router