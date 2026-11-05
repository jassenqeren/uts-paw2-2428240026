const express = require('express');

const router = express.Router();

const acaraController = require('../controllers/acaraController');

const cekApiKey = require('../middlewares/cekApiKey');

router.get('/', acaraController.getAll);

router.get('/:id', acaraController.getById);

router.post('/', cekApiKey, acaraController.create);

router.put('/:id', cekApiKey, acaraController.update);

router.delete('/:id', cekApiKey, acaraController.remove);

module.exports = router;