const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const characterSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        level: Number,
        experience: Number,
        gender: String,
        race: String,
        class: String,
        stats: [Number],
        items: [String],
        money: [Number],
        alignment: String,
        abilities: [{
            type: Schema.Types.ObjectId,
            ref: 'Ability'
        }],
        spellSlots: Number
    },
    {
        timestamps: true
    }
);


module.exports = mongoose.model('Character', characterSchema);