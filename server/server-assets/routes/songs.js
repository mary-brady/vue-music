let router = require('express').Router()
let Songs = require('../models/Song')

router.post('/', (req, res) => {
    Songs.create(req.body)
        .then(newSong => {
            res.status(200).send(newSong)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

router.get('/', (req, res, next) => {
    Songs.find({})
        .then(songs => res.send(songs))
        .catch(next)
})

module.exports = router