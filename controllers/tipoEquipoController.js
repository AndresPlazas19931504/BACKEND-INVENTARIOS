const TipoEquipo = require('../models/tipoEquipoModel')
const {request, response} = require('express')

/*
Creación*/
const createTipoEquipo = async (req = request, res = response) => {
    try{
        const nombre = req.body.nombre
        ? req.body.nombre.toUpperCase()
        : ''
        const tipoEquipoBD = await TipoEquipo.findOne({nombre})
        if (tipoEquipoBD){
            return res.status(400).json({msg: 'Ya existe el tipo de equipo'})
        }
        const data = {
            nombre
        }
        const tipoEquipo = new TipoEquipo(data)
        await tipoEquipo.save()
        return res.status(201).json(tipoEquipo)
    }catch(e){
        return res.status(500).json({
            msg: e})
    }
}

/*
Edición
*/
const putTipoEquipo = async (req = request, res = response) => {
    try{
        const { id } = req.params
        const data = req.body
        data.fechaActualizacion = new Date()

        const tipoEquipoBD = await TipoEquipo.findByIdAndUpdate(id, data, { new: true })
        if(!tipoEquipoBD) return res.json({msg: 'No existe el tipo de equipo'})

        return res.json({tipoEquipoBD})
    }catch(e){
        return res.status(500).json({msg: e})
    } 
}
/*
Listar
*/
const getTipoEquipo = async (req = request, res = response) => {

    try{
        const { estado } = req.query;
        
        const tipoEquiposDB = await TipoEquipo.find({estado})/* Select * from TipoEquipos*/
        return res.json(tipoEquiposDB)
    }catch(e) {
        return res.status(500).json({
            msg: e
        })
    }
}
/*
Eliminar
*/
const deleteTipoEquipo = async (req = request, res = response) => {
    try{
        const { id } = req.query
        const tipoEquiposDB = await TipoEquipo.findById(id)
        
        if (tipoEquiposDB) {
            const tipoEquiposDBEliminar = await TipoEquipo.findOneAndDelete(id)
            return res.json({msg: 'Fue eliminado el ID estado del equipo'} )}
        if(!tipoEquiposDB){
            return res.json({ msg: 'No exite el ID estado de equipo'} )
        }
    }catch(e) {
        return res.status(500).json({msg: e})
    }
}


module.exports = {createTipoEquipo, getTipoEquipo, putTipoEquipo, deleteTipoEquipo }