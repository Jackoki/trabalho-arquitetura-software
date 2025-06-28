const express = require('express');
const LugarController = require('../controllers/lugarController');

const router = express.Router();

router.post('/paises/:nomePais/lugares', LugarController.adicionarLugar);
router.get('/paises/:nomePais/lugares', LugarController.listarLugares);

module.exports = router;
