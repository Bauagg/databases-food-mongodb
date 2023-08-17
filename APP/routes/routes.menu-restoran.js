const router = require('express').Router()

const controlerMenuRestoran = require('../controler/controler.menu.restoran')

router.get('/menuRestoran', controlerMenuRestoran.getMenuRestoran)
router.get('/menuRestoran/:id', controlerMenuRestoran.getMenuRestoranById)
router.post('/menuRestoran', controlerMenuRestoran.createMenuRestoran)
router.put('/menuRestoran/:id', controlerMenuRestoran.updateMenuRestoran)
router.delete('/menuRestoran/:id', controlerMenuRestoran.deleteMneuRestoran)


module.exports = router