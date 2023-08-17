const mongoose = require('mongoose')

const modelpesanan = mongoose.Schema({
    tanggal_pesanan: {
        type: Date,
        required: [true, 'tanggal pesanan harus di isi']
    },
    status_pesanan: {
        type: String,
        enum: ['PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED'],
        message: '{VALUE} pesanan tidak valid',
        default: 'PENDING'
    },
    pelanggan_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Pesanan = mongoose.model('Pesanan', modelpesanan)
module.exports = Pesanan