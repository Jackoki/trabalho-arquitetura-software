const express = require('express');
const PaisController = require('../controllers/paisController');

const router = express.Router();

router.post('/paises', PaisController.adicionarPais);
router.get('/paises', PaisController.listarPaises);

module.exports = router;
