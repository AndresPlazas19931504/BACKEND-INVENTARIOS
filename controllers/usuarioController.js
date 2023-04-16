const Usuario = require('../models/usuarioModel')
const {request, response} = require('express')

/*
Creación*/
const createUsuario = async (req = request, res = response) => {
    try{
        const nombre = req.body.nombre
        ? req.body.nombre.toUpperCase()
        : ''
        const correo = req.body.correo
        ? req.body.correo.toUpperCase()
        : ''
        const usuarioBD = await Usuario.findOne({nombre,correo})
        if (usuarioBD){
            return res.status(400).json({msg: 'Ya existe el Usario o Correo electronico'})
        }
        const data = {
            nombre,correo
        }
        const usuario = new Usuario(data)
        //console.log(usuario)
        await usuario.save()
        return res.status(201).json(usuario)
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
const getUsuario = async (req = request, res = response) => {

    try{
        const { estado } = req.query;
        
        const usuarioBD = await Usuario.find({estado})/* Select * from Usuarios*/
        return res.json(usuarioBD)
    }catch(e) {
        return res.status(500).json({
            msg: e
        })
    }
}


module.exports = {createUsuario, getUsuario}