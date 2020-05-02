const Character = require('../../models/Character');
const Ability = require('../../models/Ability');

module.exports = {
    index,
    show,
    create,
    delete: deleteOne,
    update,
    new: abilityCreation,
    remove,
    add
};

function update(req, res) {
    Ability.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(function(ability) {
        res.redirect(`/api/abilities/${req.params.charId}`);
    });
}

function deleteOne(req, res) {
    Ability.findByIdAndDelete(req.params.id)
    .then(function(ability) {
        res.redirect(`/api/abilities/${req.params.charId}`);
    });
}

function remove(req, res) {
    Character.findById(req.params.charId)
    .then(function(character) {
        let i = 0;
        character.abilities.forEach(function(abilityId) {
            if (req.params.id == abilityId) {
                character.abilities.splice(i, 1);
                character.save(function(err) {
                    res.redirect(`/api/abilities/${character._id}`);
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
            character.save(function(err) {
                res.redirect(`/api/abilities/${character._id}`);
            });
        });
    });
}

function show(req, res) {
    Ability.findById(req.params.id)
    .then(function(ability) {
        Character.findById(req.params.charId)
        .then(function(character) {
            res.render('api/createAbility', {character, ability, abilityBoolean: true});
        });
    });
}

function create(req, res) {
    Ability.create(req.body)
    .then(function(ability) {
        Character.findById(req.params.charId)
        .then(function(character) {
            character.abilities.push(ability._id);
            character.save(function(err) {
                res.redirect(`/api/abilities/${character._id}`);
            });
        });
    })
}

function index(req, res) {
    Character.findById(req.params.charId)
    .then(function(character) {
        Ability.find({})
        .then(function(abilities) {
            res.render('api/abilities', {character, abilities});
        });
    });
}

function abilityCreation(req, res) {
    Character.findById(req.params.charId)
    .then(function(character) {
        res.render('api/createAbility', {character, abilityBoolean: false});
    });
}
