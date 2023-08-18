module.exports = {
    admin: (req, res, next) => {
        try {
            if (req.user.role === 'admin') {
                return next()
            } else {
                return res.status(401).json({ message: 'unauthorized access' })
            }
        } catch (error) {
            next(error)
        }
    },
    AdminAndPelanggan: (req, res, next) => {
        try {
            if (req.user.role === 'admin' || req.user.role === 'pelanggan') {
                return next()
            } else {
                return res.status(401).json({ message: 'unauthorized access' })
            }
        } catch (error) {
            next(error)
        }
    },
    adminAndKoki: (req, res, next) => {
        try {
            if (req.user.role === 'koki' || req.user.role === 'admin') {
                return next()
            } else {
                return res.status(401).json({ message: 'unauthorized access' })
            }
        } catch (error) {
            next(error)
        }
    },
    koki: (req, res, next) => {
        try {
            if (req.user.role === 'koki') {
                return next()
            } else {
                return res.status(401).json({ message: 'unauthorized access' })
            }
        } catch (error) {
            next(error)
        }
    }
}