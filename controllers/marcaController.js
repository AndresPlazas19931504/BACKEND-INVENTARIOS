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

/*
Listar
*/
const getMarca = async (req = request, res = response) => {

    try{
        const { estado } = req.query;
        
        const marcaBD = await Marca.find({estado})/* Select * from Usuarios*/
        return res.json(marcaBD)
    }catch(e) {
        return res.status(500).json({
            msg: e
        })
    }
}


module.exports = {createMarca, getMarca}