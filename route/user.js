let express = require('express')
const router = express.Router()

const { user } = require('../controller/index')
const auth = require('../midalware/authentication')


router.post('/', user.creatUser)
router.post( '/login', user.login)
router.get('/', auth, user.getUser)
router.put('/', auth, user.updateUser)
router.delete('/', user.deleteUser)

module.exports = router