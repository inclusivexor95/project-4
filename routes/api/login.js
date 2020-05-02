const express = require('express');
const router = express.Router();
// const User = require('../../models/User');


// 'Seed' default user
// const defaultUserData = {
//     name: 'Matt',
//     characters: []
// };
// User.create(defaultUserData);


// this is where login/oauth will happen later
router.get('/', function(req, res) {
    res.redirect('/api/characters');
});



module.exports = router;