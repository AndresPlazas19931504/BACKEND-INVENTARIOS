const { Router } = require('express')
const { createInventario, getInventario } = require('../controllers/inventarioController')

const router = Router()

router.post('/', createInventario)
/*crear*/

/*editar*/
router.get('/', getInventario)
/*listar*/

module.exports = router