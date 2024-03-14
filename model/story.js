const { Schema, model } = require('mongoose')

const storySchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'person' },
    title: String,
    fans: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
}, { versionKey: false, timestamps: true });

const storyModel = model('story', storySchema, 'story')

module.exports = storyModel