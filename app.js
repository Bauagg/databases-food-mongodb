require('./databases/databases-mongoose')
const express = require('express')
const logger = require('morgan')
const cookieParsein = require('cookie-parser')
const cors = require('cors')

// import router
const routerUser = require('./APP/routes/router.user')
const routerRestoran = require('./APP/routes/router.restoran')
const routerMenuRestoran = require('./APP/routes/routes.menu-restoran')
const routerPesanan = require('./APP/routes/router.pesanan')
const routerOrderdetail = require('./APP/routes/router.orderDetail')

const config = require('./APP/config')

const app = express()
const port = config.port || 4000

app.use(cors())
app.use(logger('dev'))
app.use(cookieParsein())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routerUser)
app.use('/', routerRestoran)
app.use('/', routerMenuRestoran)
app.use('/', routerPesanan)
app.use('/', routerOrderdetail)

app.use(require('./midelawre/error.midelware'))

app.listen(port, () => console.log('databases running'))