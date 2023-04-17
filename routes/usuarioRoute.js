const { Router } = require('express')
const { createUsuario, getUsuario, putUsuario, deleteUsuario } = require('../controllers/usuarioController')

const router = Router()

router.post('/', createUsuario)
/*crear*/
router.put('/', putUsuario)
/*editar*/
router.get('/', getUsuario)
/*listar*/
router.delete('/', deleteUsuario)
/*Eliminar*/
module.exports = router