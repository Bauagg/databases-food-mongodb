const router = require('express').Router()

const controlerPesanan = require('../controler/controler.pesanan')

const authorization = require('../../midelawre/authorization')

router.get('/pesanan', authorization, controlerPesanan.getPesanan)
router.get('/pesanan/:id', authorization, controlerPesanan.getPesananById)
router.post('/pesanan', authorization, controlerPesanan.createPesanan)
router.put('/pesanan/:id', authorization, controlerPesanan.updatePesanan)

module.exports = router