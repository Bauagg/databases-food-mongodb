const User = require('../models/models.user')

const bcrypt = require('../../utils/bcrypt')
const jwt = require('../../utils/jwt')

const register = async (req, res, next) => {
    try {
        const { username, email, password, role } = req.body

        const validateEmail = await User.exists({ email })
        if (validateEmail) return res.status(401).json({ message: 'email sudah terdaftar' })

        const newUser = await User.create({
            username,
            email,
            password: await bcrypt.hashPassword(password),
            role
        })

        res.status(201).json({
            error: false,
            message: 'register successfully',
            datas: newUser
        })
    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body

        const newUser = await User.findOne({ email })
        if (!newUser) return res.status(401).json({ message: 'email dan password tidak cocok' })

        const validatePassword = await bcrypt.verivePassword(password, newUser.password)
        if (!validatePassword) return res.status(401).json({ message: 'email dan password tidak cocok' })

        const payloadToken = {
            id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            role: newUser.role
        }

        const token = jwt.createToken(payloadToken)
        res.status(201).json({
            error: false,
            message: 'login successfully',
            datas: {
                username: newUser.username,
                email: newUser.email,
                role: newUser.role,
                token: token
            }
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    register,
    login
}