let router = require('express').Router()
let Songs = require('../models/Song')

router.post('/', (req, res, next) => {
    Songs.create(req.body)
        .then(newSong => res.send(newSong))
        .catch(next)
})

router.get('/', (req, res, next) => {
    Songs.find({})
        .then(songs => res.send(songs))
        .catch(next)
})

router.delete('/:id', (req, res, next) => {
    Songs.findByIdAndRemove(req.params.id)
        .then(() => res.send({
            message: 'Song gone'
        }))
        .catch(next)
})
module.exports = router