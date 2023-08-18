const mongoose = require('mongoose')

const modelUser = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username harus di isi'],
        maxlength: [250, 'max karakter adalah 250 karakter'],
        minlength: [3, 'min karakter adalah 3 karakter']
    },
    email: {
        type: String,
        required: [true, 'email harus di isi'],
        maxlength: [250, 'max karakter adalah 250 karakter'],
        validate: {
            validator: (value) => {
                const regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/
                return regexEmail.test(value)
            },
            message: (prop) => `${prop.value} email tidak valid`
        }
    },
    password: {
        type: String,
        required: [true, 'password harus di isi'],
        maxlength: [250, 'max karakter password adalah 250 max'],
        minlength: [3, 'min karakter password adalah 3 carakter']
    },
    role: {
        type: String,
        enum: ['admin', 'koki', 'pelayan', 'pelanggan'],
        message: '{VALUE} is not suport',
        default: 'pelanggan'
    }
})

const User = mongoose.model('User', modelUser)
module.exports = User