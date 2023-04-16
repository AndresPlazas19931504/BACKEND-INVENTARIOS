const { Router } = require('express')
const { createEstadoEquipo, getEstadoEquipo } = require('../controllers/estadoEquipoController')

const router = Router()

router.post('/', createEstadoEquipo)
/*crear*/

/*editar*/
router.get('/', getEstadoEquipo)
/*listar*/

module.exports = router