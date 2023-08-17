const mongoose = require('mongoose')

const modelOrderDetail = mongoose.Schema({
    jumlah: {
        type: Number,
        min: [1, 'minimal jumlah adalah 1'],
        required: [true, 'jumnlah harus di isi']
    },
    pesanan_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pesanan'
    },
    menu_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MenuRestoran'
    }
})

const OrderDetail = mongoose.model('OrderDetail', modelOrderDetail)
module.exports = OrderDetail