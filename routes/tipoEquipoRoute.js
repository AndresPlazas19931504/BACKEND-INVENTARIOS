const { Router } = require('express')
const { createTipoEquipo, getTipoEquipo } = require('../controllers/tipoEquipoController')

const router = Router()

router.post('/', createTipoEquipo)
/*crear*/

/*editar*/
router.get('/', getTipoEquipo)
/*listar*/

module.exports = router