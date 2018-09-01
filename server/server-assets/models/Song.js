let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schemaName = 'Song'

let schema = new Schema({
    title: { type: String },
    artist: { type: String },
    collection: { type: String },
    price: { type: Number },
    preview: { type: String },
    id: { type: String },
    albumArt: { type: String },
    playlistId: { type: ObjectId, ref: 'Playlist' }
})

module.exports = mongoose.model(schemaName, schema)