const { Schema, model } = require('mongoose')

const person = new Schema({
    name: String,
    age: Number,
    stories: [{ type: Schema.Types.ObjectId, ref: 'story' }]
}, { versionKey: false, timestamps: true });

const personModel = model('person', person, 'person')

module.exports = personModel
