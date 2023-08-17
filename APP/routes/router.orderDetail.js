const router = require('express').Router()

const controlerOrderDetail = require('../controler/controler.OrderDetail')

router.get('/order-detail', controlerOrderDetail.getOrderDetail)
router.get('/order-detail/:id', controlerOrderDetail.getOrderDetailById)
router.post('/order-detail', controlerOrderDetail.createOrderDetail)
router.put('/order-detail/:id', controlerOrderDetail.updateOrderDetail)
router.delete('/order-detail/:id', controlerOrderDetail.deleteOrderDetail)

module.exports = router