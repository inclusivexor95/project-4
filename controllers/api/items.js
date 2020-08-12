// const Character = require('../../models/Character');
// const Ability = require('../../models/Ability');
const Item = require('../../models/Item');


module.exports = {
    index,
    create,
};

function index(req, res) {
    Item.find({})
    .then(function(items) {
        res.status(200).json(items);
    }).catch(function(err) {
        res.status(400).json(err);
    });
}

function create(req, res) {
    Item.create(req.body)
    .then(function(item) {
        res.status(200).json(item);
    }).catch(function(err) {
        res.status(400).json(err);
    });
}