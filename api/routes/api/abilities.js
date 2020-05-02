const express = require('express');
const router = express.Router();
const abilitiesCtrl = require('../../controllers/api/abilities');



router.get('/:charId/', abilitiesCtrl.index);
router.get('/:charId/new', abilitiesCtrl.new);
router.get('/:charId/:id', abilitiesCtrl.show);
router.post('/:charId', abilitiesCtrl.create);
router.get('/delete/:charId/:id', abilitiesCtrl.delete);
router.post('/:charId/:id', abilitiesCtrl.update);
router.get('/remove/:charId/:id', abilitiesCtrl.remove);
router.get('/add/:charId/:id', abilitiesCtrl.add);




module.exports = router;