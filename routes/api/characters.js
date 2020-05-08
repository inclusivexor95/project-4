const express = require('express');
const router = express.Router();
const charactersCtrl = require('../../controllers/api/characters');


router.get('/', charactersCtrl.index);
router.get('/:id', charactersCtrl.show);
router.get('/new', charactersCtrl.new);
router.post('/', charactersCtrl.create);
router.put('/:id', charactersCtrl.update);
router.delete('/:id', charactersCtrl.delete);


module.exports = router;