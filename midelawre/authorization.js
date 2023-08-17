const jwt = require('../utils/jwt')
const { getToken } = require('../utils/getToken')

module.exports = (req, res, next) => {
    try {
        const token = getToken(req)
        if (!token) {
            return res.status(401).json({ mesage: 'authorization failed' })
        }

        const validateToken = jwt.verifyToken(token)
        if (!validateToken) {
            return res.status(401).json({ mesage: 'authorization failed' })
        }

        req.user = validateToken
        next()
    } catch (error) {
        next(error)
    }
}