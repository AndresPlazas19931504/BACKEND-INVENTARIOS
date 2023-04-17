const { Router } = require('express')
const { createEstadoEquipo, getEstadoEquipo, putEstadoEquipo, deleteEstadoEquipo } = require('../controllers/estadoEquipoController')

const router = Router()

router.post('/', createEstadoEquipo)
/*crear*/
router.put('/', putEstadoEquipo)
/*editar*/
router.get('/', getEstadoEquipo)
/*listar*/
router.delete('/', deleteEstadoEquipo)
/*borrar*/

module.exports = router