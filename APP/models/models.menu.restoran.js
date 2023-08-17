const mongoose = require('mongoose')

const modelsMenuRestoran = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name harus di isi'],
        maxlenth: [250, 'max karakter adalah 250 karakter'],
        minlength: [3, 'min karakter adalah 3 karater']
    },
    description: {
        type: String,
        required: [true, 'description harus di isi'],
        maxlenth: [1000, 'max karakter adalah 1000 karakter'],
        minlength: [3, 'min karakter adalah 3 karater']
    },
    price: {
        type: Number,
        required: [true, 'price harus di isi']
    },
    restoran: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restoran'
    }
})

const MenuRestoran = mongoose.model('MenuRestoran', modelsMenuRestoran)
module.exports = MenuRestoran