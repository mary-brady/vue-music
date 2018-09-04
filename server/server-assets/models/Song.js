let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schemaName = 'Song'

let schema = new Schema({
    trackName: { type: String },
    artistName: { type: String },
    collectionName: { type: String },
    trackPrice: { type: Number },
    previewUrl: { type: String },
    artworkUrl100: { type: String },
    playlistId: { type: ObjectId, ref: 'Playlist' }
})

module.exports = mongoose.model(schemaName, schema)