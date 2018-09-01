let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schemaName = 'Song'

let schema = new Schema({
    title: { type: String },
    artist: { type: String },
    collection: { type: String },
    price: { type: Number },
    preview: { type: String }


})