const { Router } = require('express')
const { createMarca, getMarca } = require('../controllers/marcaController')

const router = Router()

router.post('/', createMarca)
/*crear*/

/*editar*/
router.get('/', getMarca)
/*listar*/

module.exports = router