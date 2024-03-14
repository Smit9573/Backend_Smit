let express = require('express')
const router = express.Router()

const user = require('./user')
const product = require('./product')
const person = require('./person')
const story = require('./story')

router.use('/user', user)
router.use('/product', product)
router.use('/person', person)
router.use('/story', story)

module.exports = router