var express = require('express');
var router = express.Router();
let indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.home);

// Crear una nueva nota
router.post('/',indexController.nuevaNota)

// Detail - Editar
router.get('/notas/:id', indexController.detalle);
router.post('/notas/:id', indexController.update);

//Eliminar con soft delete.
router.delete('/', indexController.delete);

// Fijar una nota
router.put('/', indexController.fijar);

module.exports = router;
