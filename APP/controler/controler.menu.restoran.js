const MenuRestoran = require('../models/models.menu.restoran')
const Restoran = require('../models/models.restoran')

const getMenuRestoran = async (req, res, next) => {
    try {
        const newMenuRestoran = await MenuRestoran.find().populate('restoran')

        res.status(200).json({
            error: false,
            message: 'lihat data menu restoran successfuly',
            datas: newMenuRestoran
        })
    } catch (error) {
        next(error)
    }
}

const getMenuRestoranById = async (req, res, next) => {
    try {
        const newMenuRestoran = await MenuRestoran.findOne({ _id: req.params.id })
        res.status(200).json({
            error: false,
            message: 'lihat data by id successfully',
            datas: newMenuRestoran
        })
    } catch (error) {
        next(error)
    }
}

const createMenuRestoran = async (req, res, next) => {
    try {
        const { name, description, price, restoran } = req.body

        let restoranId = null
        if (restoran) {
            const newRestoran = await Restoran.findOne({ name: { $regex: restoran, $options: 'i' } })

            if (newRestoran._id) restoranId = newRestoran._id
        }

        const newMenuRestoran = await MenuRestoran.create({ name, description, price, restoran: restoranId })

        res.status(201).json({
            error: false,
            message: 'create data menu restoran successfully',
            datas: newMenuRestoran
        })
    } catch (error) {
        next(error)
    }
}

const updateMenuRestoran = async (req, res, next) => {
    try {
        const { name, description, price, restoran } = req.body

        let restoranId = null
        if (restoran) {
            const newRestoran = await Restoran.findOne({ name: { $regex: restoran, $options: 'i' } })

            if (newRestoran) restoranId = newRestoran._id
        }

        const newMenuRestoran = await MenuRestoran.updateOne({ _id: req.params.id }, { name, description, price, restoran: restoranId })

        if (newMenuRestoran.modifiedCount === 1) {
            res.status(201).json({
                error: false,
                message: 'update data menu restoran successfully',
                datas: newMenuRestoran
            })
        } else {
            res.status(200).json({
                error: false,
                message: 'data is not update',
                datas: newMenuRestoran
            })
        }
    } catch (error) {
        next(error)
    }
}

const deleteMneuRestoran = async (req, res, next) => {
    try {
        await MenuRestoran.deleteOne({ _id: req.params.id })

        res.status(200).json({
            error: false,
            message: 'dele data successfully',
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getMenuRestoran,
    getMenuRestoranById,
    createMenuRestoran,
    updateMenuRestoran,
    deleteMneuRestoran
}