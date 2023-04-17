const express = require('express')
const app = express()
const cors = require('cors')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))
const tipoEquipo = require('./routes/tipoEquipoRoute')
const estadoEquipo = require('./routes/estadoEquipoRoute')
const usuario = require('./routes/usuarioRoute')
const marca = require('./routes/marcaRoute')
const inventario = require('./routes/inventarioRouter')

/* URI o endpoint tipoEquipo*/
app.use('/api/tipoEquipo', tipoEquipo)
/* URI o endpoint estadoEquipo*/
app.use('/api/estadoEquipo', estadoEquipo)
/* URI o endpoint estadoEquipo*/
app.use('/api/usuario', usuario)
/* URI o endpoint marca*/
app.use('/api/marca', marca)
/* URI o endpoint inventario*/
app.use('/api/inventario', inventario)

module.exports = app