let router = require('express').Router()
let Playlist = require('../models/Playlist')

router.post('/', (req, res, next) => {
    Playlist.create(req.body)
        .then(newPlaylist => res.send(newPlaylist))
        .catch(next)
})

router.get('/', (req, res, next) => {
    Playlist.find({})
        .then(playlist => res.send(playlist))
        .catch(next)
})

module.exports = router