const { Schema, model } = require ('mongoose')

const UsuarioSchema = Schema({
    
    nombre:{
        type: String,
        required: [true, 'Nombre requerido']
    },
    correo:{
        type: String,
        required: [true, 'correo requerido'],
        minLength: 6,
        maxLength: 50
    },
    estado:{
        type: Boolean,
        default: true,
        required: true
    },
    fecheCreacion:{
        type: Date,
        default: new Date()
    },
    fechaActualizacion:{
        type: Date,
        default: new Date()
    },
})

module.exports = model('Usuario', UsuarioSchema)