const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const abilitySchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        level: Number,
        cantrip: Boolean,
        range: Number,
        weapon: Boolean,
        hands: Number,
        damage: String
    }
);


module.exports = mongoose.model('Ability', abilitySchema);