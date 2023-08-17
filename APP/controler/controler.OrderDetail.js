const OrderDetail = require('../models/models.orderDetail')

const getOrderDetail = async (req, res, next) => {
    try {
        const newOrderDetail = await OrderDetail.find()
            .populate({
                path: 'pesanan_id',
                populate: {
                    path: 'pelanggan_id',
                    select: '_id username email role'
                }
            }).populate({
                path: 'menu_id',
                populate: 'restoran'
            })

        res.status(200).json({
            error: false,
            message: 'get data successfully',
            datas: newOrderDetail
        })
    } catch (error) {
        next(error)
    }
}

const getOrderDetailById = async (req, res, next) => {
    try {
        const newOrderDetail = await OrderDetail.findOne({ _id: req.params.id })
            .populate({
                path: 'pesanan_id',
                populate: {
                    path: 'pelanggan_id',
                    select: '_id username email role'
                }
            })
            .populate({
                path: 'menu_id',
                populate: 'restoran'
            })

        if (!newOrderDetail) return res.status(404).json({ message: 'data not found' })

        res.status(200).json({
            error: false,
            message: 'data successfully',
            datas: newOrderDetail
        })
    } catch (error) {
        next(error)
    }
}

const createOrderDetail = async (req, res, next) => {
    try {
        const { jumlah, pesanan_id, menu_id } = req.body
        const newOrderDetail = await OrderDetail.create({ jumlah, pesanan_id, menu_id })

        res.status(201).json({
            error: false,
            message: 'create data successfully',
            datas: newOrderDetail
        })
    } catch (error) {
        next(error)
    }
}

const updateOrderDetail = async (req, res, next) => {
    try {
        const { jumlah, pesanan_id, menu_id } = req.body
        const newOrderDetail = await OrderDetail.updateOne({ _id: req.params.id }, { jumlah, pesanan_id, menu_id })

        if (newOrderDetail.modifiedCound === 1) {
            res.status(201).json({
                error: false,
                message: 'update data successfully',
                datas: newOrderDetail
            })
        } else {
            res.status(200).json({
                error: false,
                message: 'data is not update',
                datas: newOrderDetail
            })
        }

    } catch (error) {
        next(error)
    }
}

const deleteOrderDetail = async (req, res, next) => {
    try {
        const newOrderDetail = await OrderDetail.deleteOne({ _id: req.params.id })
        if (!newOrderDetail) return res.status(404).json({ message: 'data not found' })

        res.status(200).json({
            error: false,
            message: 'delete data successfully',
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getOrderDetail,
    getOrderDetailById,
    createOrderDetail,
    updateOrderDetail,
    deleteOrderDetail
}