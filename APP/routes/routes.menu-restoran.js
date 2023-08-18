const router = require('express').Router()

const controlerMenuRestoran = require('../controler/controler.menu.restoran')

const authorization = require('../../midelawre/authorization')
const adminAuthorization = require('../../midelawre/admin.authorization')


router.get('/menuRestoran', authorization, adminAuthorization.adminAndKoki, controlerMenuRestoran.getMenuRestoran)
router.get('/menuRestoran/:id', authorization, adminAuthorization.adminAndKoki, controlerMenuRestoran.getMenuRestoranById)
router.post('/menuRestoran', authorization, adminAuthorization.adminAndKoki, controlerMenuRestoran.createMenuRestoran)
router.put('/menuRestoran/:id', authorization, adminAuthorization.adminAndKoki, controlerMenuRestoran.updateMenuRestoran)
router.delete('/menuRestoran/:id', authorization, adminAuthorization.admin, controlerMenuRestoran.deleteMneuRestoran)


module.exports = router