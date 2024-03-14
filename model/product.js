const { Schema, model } = require('mongoose')

const product = new Schema({
    name: {type: String, default: null},
    price: {type: Number, default: null}
}, { versionKey: false, timestamps: true })

const productModal = model('Product', product, 'product')

module.exports = productModal