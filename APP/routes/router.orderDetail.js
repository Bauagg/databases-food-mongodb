const router = require('express').Router()

const controlerOrderDetail = require('../controler/controler.OrderDetail')
const authorization = require('../../midelawre/authorization')

router.get('/order-detail', authorization, controlerOrderDetail.getOrderDetail)
router.get('/order-detail/:id', authorization, controlerOrderDetail.getOrderDetailById)
router.post('/order-detail', authorization, controlerOrderDetail.createOrderDetail)
router.put('/order-detail/:id', authorization, controlerOrderDetail.updateOrderDetail)
router.delete('/order-detail/:id', authorization, controlerOrderDetail.deleteOrderDetail)

module.exports = router