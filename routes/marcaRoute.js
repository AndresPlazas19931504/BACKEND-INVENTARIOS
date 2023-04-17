const { Router } = require('express')
const { createMarca, getMarca, putMarca, deleteMarca } = require('../controllers/marcaController')

const router = Router()

router.post('/', createMarca)
/*crear*/
router.put('/', putMarca)
/*editar*/
router.get('/', getMarca)
/*listar*/
router.delete('/', deleteMarca)
/*borrar*/

module.exports = router