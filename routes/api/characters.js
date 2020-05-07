const express = require('express');
const router = express.Router();
const charactersCtrl = require('../../controllers/api/characters');


router.get('/', charactersCtrl.index);
router.get('/:id', charactersCtrl.detail);
router.get('/new', charactersCtrl.new);
router.post('/', charactersCtrl.create);


module.exports = router;