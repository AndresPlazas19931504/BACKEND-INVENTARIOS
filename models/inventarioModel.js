const { Schema, model } = require ('mongoose')

const InventarioSchema = Schema({
    
    serial:{
        type: String,
        required: [true, 'Serial requerido'],
        unique: true
        
    },
    modelo:{
        type: String,
        required: [true, 'Modelo requerido'],
        unique: false
    },
    descripción:{
        type: String,
        required: false
    },
    fotoEquipo:{
        type: String,
        required: false
    },
    color:{
        type: String,
        required: false
    },
    fechaCompra:{
        type: Date,
        required: [true, 'Fecha de compra requerido'],
    },
    precio:{
        type: Number,
        required: false
    },
    usuario:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    marca:{
        type: Schema.Types.ObjectId,
        ref: 'Marca',
        required: true
    },
    estadoEquipo:{
        type: Schema.Types.ObjectId,
        ref: 'EstadoEquipo',
        required: true
    },
    tipoEquipo:{
        type: Schema.Types.ObjectId,
        ref: 'TipoEquipo',
        required: true
    },
}, 
{timestamps: true}

)

module.exports = model('Inventario', InventarioSchema)