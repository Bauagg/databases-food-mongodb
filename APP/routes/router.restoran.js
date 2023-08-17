const router = require('express').Router()

const controlerRestoran = require('../controler/controler.restoran')

router.get('/restoran', controlerRestoran.getRestoran)
router.get('/restoran/:id', controlerRestoran.getRestoranById)
router.post('/restoran', controlerRestoran.createRestoran)
router.put('/restoran/:id', controlerRestoran.updateRestoran)
router.delete('/restoran/:id', controlerRestoran.deleteRestoran)

module.exports = router