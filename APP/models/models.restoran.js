const mongoose = require('mongoose')

const modelRestoran = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name harus di isi'],
        maxlength: [250, 'max karakter name adalah 250 karakter'],
        minlength: [3, 'min karakter name adalah 250 karakter']
    },
    alamat: {
        type: String,
        required: [true, 'alamat harus di isi'],
        maxlength: [1000, 'max karakter alamat adalah 1000 karakter']
    },
    no_telpon: {
        type: Number,
        required: [true, 'no telepon harus di isi'],
    },
    jam_oprasi: {
        type: String,
        required: [true, 'Jam operasi restoran harus diisi']
    }
})

const Restoran = mongoose.model('Restoran', modelRestoran)
module.exports = Restoran