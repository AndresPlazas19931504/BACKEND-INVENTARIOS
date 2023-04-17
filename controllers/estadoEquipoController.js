const EstadoEquipo = require('../models/estadoEquipoModel')
const {request, response} = require('express')

/*
Creación*/
const createEstadoEquipo = async (req = request, res = response) => {
    try{
        const nombre = req.body.nombre
        ? req.body.nombre.toUpperCase()
        : ''
        const estadoEquipoBD = await EstadoEquipo.findOne({nombre})
        if (estadoEquipoBD){
            return res.status(400).json({msg: 'Ya existe el estado de equipo'})
        }
        const data = {
            nombre
        }
        const estadoEquipo = new EstadoEquipo(data)
        //console.log(estadoEquipoEquipo)
        await estadoEquipo.save()
        return res.status(201).json(estadoEquipo)
    }catch(e){
        return res.status(500).json({ msg: e })
    }
}

/*
Edición
*/
const putEstadoEquipo = async (req = request, res = response) => {
    try{
        const { id } = req.query
        const data = req.body
        data.fechaActualizacion = new Date()

        const estadoEquipoBD = await EstadoEquipo.findByIdAndUpdate(id, data, { new: true })
        if(!estadoEquipoBD) return res.json({msg: 'No existe el estado de equipo'})

        return res.json({estadoEquipoBD})
    }catch(e){
        return res.status(500).json({msg: e})
    } 
}
/*
Listar
*/
const getEstadoEquipo = async (req = request, res = response) => {

    try{
        const { estado } = req.query;
        const estadoEquiposDB = await EstadoEquipo.find({estado})/* Select * from EstadoEquipos*/
        return res.json(estadoEquiposDB)
    }catch(e) {
        return res.status(500).json({ msg: e })
    }
}
/*
Eliminar
*/
const deleteEstadoEquipo = async (req = request, res = response) => {
    try{
        const { id } = req.query
        const estadoEquiposDB = await EstadoEquipo.findById(id)
        
        if (estadoEquiposDB) {
            const estadoEquiposDBEliminar = await EstadoEquipo.findOneAndDelete(id)
            return res.json({msg: 'Fue eliminado el ID estado del equipo'} )}
        if(!estadoEquiposDB){
            return res.json({ msg: 'No exite el ID estado de equipo'})
        }
    }catch(e) {
        return res.status(500).json({msg: e})
    }
}

module.exports = { createEstadoEquipo, getEstadoEquipo, putEstadoEquipo, deleteEstadoEquipo}