const mongoose = require('mongoose')

const mongoConn = async () => {
    try{
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('Conexión Exitosa a MongoBD')
    }catch(e){
        console.log('Error', e)
        throw new Error('Error en conexion a MongoBD')
    }
}
module.exports = { mongoConn }

/*
const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI)

const mongoConn = (mongoose.connection)

mongoConn.on('Error en conexion a mongo', (error) => {
    console.log(error)
})

mongoConn.once('connected', () => {
    console.log('Conectado a la base de datos');
})
*/