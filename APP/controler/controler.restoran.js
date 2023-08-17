const Restoran = require('../models/models.restoran')

const getRestoran = async (req, res, next) => {
    try {
        const newRestoran = await Restoran.find()

        res.status(200).json({
            error: false,
            message: 'get data restoran successfully',
            datas: newRestoran
        })
    } catch (error) {
        next(error)
    }
}

const getRestoranById = async (req, res, next) => {
    try {
        const newRestoran = await Restoran.findOne({ _id: req.params.id })

        if (!newRestoran) return res.status(404).json({ message: 'data not found' })

        res.status(200).json({
            error: false,
            message: 'get data restoran by id successfully',
            datas: newRestoran
        })
    } catch (error) {
        next(error)
    }
}

const createRestoran = async (req, res, next) => {
    try {
        const { name, alamat, no_telpon, jam_oprasi } = req.body

        const newRestoran = await Restoran.create({ name, alamat, no_telpon, jam_oprasi })

        res.status(201).json({
            error: false,
            message: 'create data Restoran successfully',
            datas: newRestoran
        })
    } catch (error) {
        next(error)
    }
}

const updateRestoran = async (req, res, next) => {
    try {
        const { name, alamat, no_telpon, jam_oprasi } = req.body
        const newRestoran = await Restoran.updateOne({ _id: req.params.id }, { name, alamat, no_telpon, jam_oprasi })

        if (newRestoran.modifiedCount === 1) {
            res.status(201).json({
                error: false,
                message: 'update data succesfully',
                datas: newRestoran
            })
        } else {
            res.status(200).json({
                error: false,
                message: 'date Restoran is not Update',
                datas: newRestoran
            })
        }
    } catch (error) {
        next(error)
    }
}

const deleteRestoran = async (req, res, next) => {
    try {
        await Restoran.deleteOne({ _id: req.params.id })

        res.status(200).json({
            error: false,
            message: 'delete data restoran successfully'
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getRestoran,
    getRestoranById,
    createRestoran,
    updateRestoran,
    deleteRestoran
}