let express = require('express')
let bp = require('body-parser')
let server = express()
let cors = require('cors')
let port = 3000

server.use(cors())

//connect to db
require('./server-assets/db-config/mlab-config')

//register middleware
server.use(bp.json())
server.use(bp.urlencoded({
    extended: true
}))

let songRoute = require('./server-assets/routes/songs')
let playlistRoute = require('./server-assets/routes/playlists')

server.use('/api/songs', songRoute)
server.use('/api/playlist', playlistRoute)

server.use('/api/*', (error, req, res, next) => {
    res.send(error)
})

server.use('*', (req, res, next) => {
    res.status(404).send('<p>Not a real page</p>')
})

server.listen(port, () => {
    console.log('runnin on port: ', port)
})