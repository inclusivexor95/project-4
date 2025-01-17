const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const characterSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        level: Number,
        exp: Number,
        gender: String,
        race: String,
        class: String,
        stats: [Number],
        extraStats: [Number],
        originalStats: [Number],
        speed: Number,
        languages: [String],
        healthTotal: Number,
        healthCurrent: Number,
        items: [String],
        money: [Number],
        alignment: String,
        equipment: [{
            type: Schema.Types.ObjectId,
            ref: 'Item'
        }],
        abilities: [{
            type: Schema.Types.ObjectId,
            ref: 'Ability'
        }],
        spellSlots: Number,
        proficiencies: [[Number], [Number]]
    },
    {
        timestamps: true
    }
);


module.exports = mongoose.model('Character', characterSchema);