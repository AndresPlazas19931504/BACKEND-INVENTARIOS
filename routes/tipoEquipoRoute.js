const { Router } = require('express')
const { createTipoEquipo, getTipoEquipo, putTipoEquipo, deleteTipoEquipo } = require('../controllers/tipoEquipoController')

const router = Router()

router.post('/', createTipoEquipo)
/*crear*/
router.put('/', putTipoEquipo)
/*editar*/
router.get('/', getTipoEquipo)
/*listar*/
router.delete('/', deleteTipoEquipo)
/*Eliminar*/

module.exports = router