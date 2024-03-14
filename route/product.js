let express = require('express')
const router = express.Router()

const { product } = require('../controller/index')

router.post('/', product.creatProduct)
router.get('/', product.getProduct)
router.put('/', product.updateProduct)
router.delete('/', product.deleteProduct)

module.exports = router