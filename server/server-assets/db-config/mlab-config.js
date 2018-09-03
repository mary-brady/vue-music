let mongoose = require('mongoose')
let connectionString = 'mongodb://testuser:user123@ds018508.mlab.com:18508/vue-music'
let connection = mongoose.connection

mongoose.connect(connectionString, { useNewUrlParser: true })

connection.on('error', err => {
    console.log('Error from database: ', err)
})

connection.once('open', () => {
    console.log('Connected to the DB from mlab-config.js!')
})
