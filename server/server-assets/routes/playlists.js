let router = require('express').Router()
let Playlist = require('../models/Playlist')
let Songs = require('../models/Song')

router.post('api/playlist', (req, res, next) => {
    Playlist.create(req.body)
        .then(newPlaylist => res.send(newPlaylist))
        .catch(next)
})

router.delete('api/playlist/songs/:songId', (req, res, next) => {
    Songs.findByIdAndRemove(req.params.songId)
        .then(() => res.send({
            message: "song delorted!"
        }))
        .catch(next)
})

module.exports = router