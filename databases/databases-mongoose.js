const mongoose = require('mongoose')
const { dbHost, dbPort, dbName } = require('../APP/config')

mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName  }`)

const db = mongoose.connection

db.on('error', console.log.bind(console, 'databases connect error'))
db.on('open', () => console.log('daases connect successfully'))