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

server.listen(port, () => {
    console.log('runnin on port: ', port)
})