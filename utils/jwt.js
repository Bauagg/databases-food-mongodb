const jwt = require('jsonwebtoken')
const config = require('../APP/config')

module.exports = {
    createToken: (token) => {
        return jwt.sign(token, config.secretKeyt)
    },
    verifyToken: (token) => {
        return jwt.verify(token, config.secretKeyt)
    }
}