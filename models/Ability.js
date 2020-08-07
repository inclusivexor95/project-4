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
        item: Boolean,
        equipped: Boolean,
        hands: Number,
        damage: [Number],
        damageType: String,
        armorBonus: Number,
        otherEffects: [String],
        aoe: Number,
        rollType: String
    }
);


module.exports = mongoose.model('Ability', abilitySchema);