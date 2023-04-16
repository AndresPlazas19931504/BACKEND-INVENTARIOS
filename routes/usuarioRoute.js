const { Router } = require('express')
const { createUsuario, getUsuario } = require('../controllers/usuarioController')

const router = Router()

router.post('/', createUsuario)
/*crear*/

/*editar*/
router.get('/', getUsuario)
/*listar*/

module.exports = router