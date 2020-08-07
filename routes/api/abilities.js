const express = require('express');
const router = express.Router();
const abilitiesCtrl = require('../../controllers/api/abilities');


router.get('/:charId/', abilitiesCtrl.index);
router.get('/:id', abilitiesCtrl.show);
router.get('/delete/:id', abilitiesCtrl.delete);
router.get('/remove/:charId/:id', abilitiesCtrl.remove);
router.get('/:charId/:id', abilitiesCtrl.add);


router.post('/:id', abilitiesCtrl.update);
router.post('/', abilitiesCtrl.create, function() {
    console.log('routing to create');
});



module.exports = router;