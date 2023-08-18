const router = require('express').Router()

const controlerRestoran = require('../controler/controler.restoran')

const authorization = require('../../midelawre/authorization')
const adminAuthorization = require('../../midelawre/admin.authorization')

router.get('/restoran', authorization, adminAuthorization.AdminAndPelanggan, controlerRestoran.getRestoran)
router.get('/restoran/:id', authorization, adminAuthorization.AdminAndPelanggan, controlerRestoran.getRestoranById)
router.post('/restoran', authorization, adminAuthorization.admin, controlerRestoran.createRestoran)
router.put('/restoran/:id', authorization, adminAuthorization.admin, controlerRestoran.updateRestoran)
router.delete('/restoran/:id', authorization, adminAuthorization.admin, controlerRestoran.deleteRestoran)

module.exports = router