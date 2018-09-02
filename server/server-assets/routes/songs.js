let router = require('express').Router()
let Songs = require('../models/Song')

router.post('api/songs', (req, res) => {
    Songs.create(req.body)
        .then(newSong => {
            res.status(200).send(newSong)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

module.exports = router