
const app = require('./app')
const {mongoConn} = require('./databases/configuration')
const dotenv = require('dotenv').config()

app.set('port', process.env.PORT)  // middleware

const conn = mongoConn()

app.listen (app.get('port'), () => { 
    console.log ('arranco por el puesto '+ app.get('port'))
})
