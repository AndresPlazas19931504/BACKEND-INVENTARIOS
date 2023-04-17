const { Router } = require('express')
const { createInventario, getInventario, putInventario, deleteInventario } = require('../controllers/inventarioController')

const router = Router()

router.post('/', createInventario)
/*crear*/
router.put('/', putInventario)
/*editar*/
router.get('/', getInventario)
/*listar*/
router.delete('/', deleteInventario)
/*Eliminar*/
module.exports = router