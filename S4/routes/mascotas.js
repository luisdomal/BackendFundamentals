// Estructura del CRUD
const router = require('express').Router();
const {
  crear,
  obtener,
  modificar,
  eliminar
} = require('../controllers/mascotas')

router.get('/', obtener)
router.post('/', crear)
router.put('/:id', modificar)
router.delete('/:id', eliminar)

module.exports = router;