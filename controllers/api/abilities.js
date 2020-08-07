const Character = require('../../models/Character');
const Ability = require('../../models/Ability');

module.exports = {
    index,
    show,
    create,
    delete: deleteOne,
    update,
    remove,
    add
};

function update(req, res) {
    Ability.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(function(ability) {
        res.status(200).json(ability);
    }).catch(function(err) {
        res.status(400).json(err);
    });
}

function deleteOne(req, res) {
    Ability.findByIdAndDelete(req.params.id)
    .then(function() {
        res.status(200);
    }).catch(function(err) {
        res.status(400).json(err);
    });
}

function remove(req, res) {
    Character.findById(req.params.charId)
    .then(function(character) {
        let i = 0;
        character.abilities.forEach(function(abilityId) {
            if (req.params.id == abilityId) {
                character.abilities.splice(i, 1);
                character.save(function() {
                    res.status(200).json(character);
                })
                .catch(function(err) {
                    res.status(400).json(err);
                });
            };
            i++;
        });
    });
}

function add(req, res) {
    Character.findById(req.params.charId)
    .then(function(character) {
        Ability.findById(req.params.id)
        .then(function(ability) {
            character.abilities.push(ability._id);
            character.save(function() {
                res.status(200).json(character);
            })
            .catch(function(err) {
                res.status(400).json(err);
            });
        });
    });
}

function show(req, res) {
    Ability.findById(req.params.id)
    .then(function(ability) {
        res.status(200).json(ability);
    }).catch(function(err) {
        res.status(400).json(err);
    });
}

function create(req, res) {
    console.log('create function running');
    Ability.create(req.body)
    .then(function(ability) {
        res.status(200).json(ability);
    }).catch(function(err) {
        res.status(400).json(err);
    });
}

function index(req, res) {
    Character.findById(req.params.charId)
    .then(function(character) {
        Ability.find({})
        .then(function(abilities) {
            res.status(200).json(abilities);
        }).catch(function(err) {
            res.status(400).json(err);
        });
    });
}
