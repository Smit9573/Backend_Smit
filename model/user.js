const { Schema, model } = require('mongoose')

const user = new Schema({
    name: { type: String, default: null },
    email:{ type: String, require: true},
    password: { type: Number, default: null },
    token: { type: String, default: null },
}, { versionKey: false, timestamps: true })

const userModal = model('User', user, 'user')

module.exports = userModal