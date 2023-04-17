const Marca = require('../models/marcasModel')
const {request, response} = require('express')

/*
Creación*/
const createMarca = async (req = request, res = response) => {
    try{
        const nombre = req.body.nombre
        ? req.body.nombre.toUpperCase()
        : ''
        const marcaBD = await Marca.findOne({nombre})
        if (marcaBD){
            return res.status(400).json({msg: 'Ya existe la marca del equipo'})
        }
        const data = {
            nombre
        }
        const marca = new Marca(data)
        //console.log(marca)
        await marca.save()
        return res.status(201).json(marca)
    }catch(e){
        return res.status(500).json({
            msg: e
        })
    }
}

/*
Edición
*/
const putMarca = async (req = request, res = response) => {
    try{
        const { id } = req.query
        const data = req.body
        data.fechaActualizacion = new Date()

        const marcaBD = await Marca.findByIdAndUpdate(id, data, { new: true })
        if(!marcaBD) return res.json({msg: 'No existe la marca de equipo'})

        return res.json({marcaBD})
    }catch(e){
        return res.status(500).json({msg: e})
    } 
}
/*
Listar
*/
const getMarca = async (req = request, res = response) => {

    try{
        const { estado } = req.query;
        
        const marcaBD = await Marca.find({estado})
        return res.json(marcaBD)
    }catch(e) {
        return res.status(500).json({
            msg: e
        })
    }
}
/*
Eliminar
*/
const deleteMarca = async (req = request, res = response) => {
    try{
        const { id } = req.query
        const marcaBD = await Marca.findById(id)
        
        if (marcaBD) {
            const marcaBDEliminar = await Marca.findOneAndDelete(id)
            return res.json({msg: 'Fue eliminado el ID estado del equipo'} )}
        if(!marcaBD){
            return res.json({ msg: 'No exite el ID estado de equipo'} )
        }
    }catch(e) {
        return res.status(500).json({msg: e})
    }
}

module.exports = {createMarca, getMarca, putMarca, deleteMarca}