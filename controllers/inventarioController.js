const Inventario = require('../models/inventarioModel')
const Usuario = require('../models/usuarioModel')
const Marca = require('../models/marcasModel')
const EstadoEquipo = require('../models/estadoEquipoModel')
const TipoEquipo = require('../models/tipoEquipoModel')
const {request, response} = require('express')

/*
Creación*/
const createInventario = async (req = request, res = response) => {
    try{
        const data = req.body
        //console.log(data)
        const { usuario, marca, estadoEquipo, tipoEquipo } = data;
        
         /*Inicio Validación Usuario*/
        const usuarioBD = Usuario.findOne({
            _id: usuario._id,
            estado: true
        }) // ---> Consulta tabla Usuarios de mongo
        if(!usuarioBD){
            return res.status(400).json({msg: 'Usuario no existe'})
        }
         /*Fin Validación Usuario*/

        /*Inicio Validación Marca*/
        const marcaBD = Marca.findOne({
            _id: marca._id,
            estado: true
        }) // ---> Consulta tabla Marcas de mongo
        if(!marcaBD){
            return res.status(400).json({msg: 'Marca no existe'})
        }
        /*Fin Validación Marca*/

        /*Inicio Validación EstadoEquipo*/
        const estadoEquipoBD = EstadoEquipo.findOne({
            _id: estadoEquipo._id,
            estado: true
        }) // ---> Consulta tabla Estado Equipos de mongo
        if(!estadoEquipoBD){
            return res.status(400).json({msg: 'Estado Equipo no existe'})
        }
        /*Fin Validación EstadoEquipo*/

        /*Inicio Validación Tipo Equipos*/
        const tipoEquipoBD = TipoEquipo.findOne({
            _id: tipoEquipo._id,
            estado: true
        }) // ---> Consulta tabla Estado Equipos de mongo
        if(!tipoEquipoBD){
            return res.status(400).json({msg: 'Marca no existe'})
        }
        /*Fin Validación Tipo Equipos*/
        
        const inventario = new Inventario(data)
        //console.log(Inventario)
        await inventario.save()

        return res.status(201).json(inventario)
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
const getInventario = async (req = request, res = response) => {
    try{
        const inventarioDB = await Inventario.find()/* Select * from Inventario*/
        return res.json(inventarioDB)
    }catch(e) {
        return res.status(500).json({
            msg: e
        })
    }
}


module.exports = {createInventario, getInventario}