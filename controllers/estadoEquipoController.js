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
        return res.status(500).json({
            msg: e
        })
    }
}

/*
Edición
*/

/*
Listar
*/
const getEstadoEquipo = async (req = request, res = response) => {

    try{
        const { estado } = req.query;
        
        const estadoEquiposDB = await EstadoEquipo.find({estado})/* Select * from EstadoEquipos*/
        return res.json(estadoEquiposDB)
    }catch(e) {
        return res.status(500).json({
            msg: e
        })
    }
}


module.exports = {createEstadoEquipo, getEstadoEquipo}