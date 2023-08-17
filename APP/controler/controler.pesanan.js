const Pesanan = require('../models/models.pesanan')

const getPesanan = async (req, res, next) => {
    try {
        const newPesanan = await Pesanan.find({ user: req.user._id }).populate('pelanggan_id', 'username email')
        res.status(200).json({
            error: false,
            message: 'data Pesanan successfully',
            datas: newPesanan
        })
    } catch (error) {
        next(error)
    }
}

const getPesananById = async (req, res, next) => {
    try {
        const newPesanan = await Pesanan.findOne({ _id: req.params.id }).populate('pelanggan_id', 'username email')
        if (!newPesanan) return res.status(404).json({ message: 'data not found' })

        res.status(200).json({
            error: false,
            message: 'data by id successfully',
            datas: newPesanan
        })
    } catch (error) {
        next(error)
    }
}

const createPesanan = async (req, res, next) => {
    try {
        const { status_pesanan } = req.body
        const newPesanan = await Pesanan.create({
            tanggal_pesanan: new Date(),
            status_pesanan,
            pelanggan_id: req.user.id
        })

        res.status(201).json({
            error: false,
            message: 'create data successfully',
            datas: newPesanan
        })
    } catch (error) {
        next(error)
    }
}

const updatePesanan = async (req, res, next) => {
    try {
        const { status_pesanan } = req.body

        if (!Pesanan.schema.path('status_pesanan').enumValues.includes(status_pesanan)) {
            return res.status(400).json({
                error: true,
                message: `Status pesanan '${status_pesanan}' tidak valid`
            })
        }

        const newPesanan = await Pesanan.updateOne({ _id: req.params.id }, {
            tanggal_pesanan: new Date(),
            status_pesanan,
            pelanggan_id: req.user.id
        })

        res.status(201).json({
            error: false,
            message: 'create data successfully',
            datas: newPesanan
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getPesanan,
    getPesananById,
    createPesanan,
    updatePesanan
}