const { Schema, model } = require ('mongoose')

const MarcaSchema = Schema({
    
    nombre:{
        type: String,
        required: [true, 'Nombre requerido']
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

module.exports = model('Marca', MarcaSchema)