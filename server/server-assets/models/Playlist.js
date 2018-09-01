let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schemaName = 'Playlist'

let schema = new Schema({
    title: { type: String },
    artist: { type: String },
    collection: { type: String },
    price: { type: Number },
    preview: { type: String },
    id: { type: String },
})

module.exports = mongoose.model(schemaName, schema)