const Character = require('../../models/Character');
const User = require('../../models/User');

module.exports = {
    index,
    show,
    create,
    delete: deleteOne,
    update,
    new: charCreation,
    edit
};

function update(req, res) {
    Character.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(function(character) {
        res.status(200).json(character);
    }).catch(function(err) {
        res.status(400).json(err);
    });
}

function deleteOne(req, res) {
    Character.findByIdAndDelete(req.params.id)
    .then(function(character) {
        res.status(200).json(character);
    }).catch(function(err) {
        res.status(400).json(err);
    });
}

function show(req, res) {
    Character.findById(req.params.id)
    .then(function(character) {
        res.status(200).json(character);
    }).catch(function(err) {
        res.status(400).json(err);
    });
}

function create(req, res) {
    Character.create(req.body)
    .then(function(character) {
        User.findOne({name: 'Matt'})
        .then(function(user) {
            user.characters.push(character._id);
            user.save(function(err) {
                res.redirect('/api/characters');
            });
        });
    })
}

function index(req, res) {
    User.findOne({name: 'Matt'})
    .populate('characters').exec(function(err, user) {
        res.render('api/characters', {user, characters: user.characters});
    });
}

function charCreation(req, res) {
    User.findOne({name: 'Matt'})
    .then(function(user) {
        res.render('api/createCharacter', {user});
    });
}

function edit(req, res) {
    res.render('api/createCharacter');
}