const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const itemSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        bonusStats: [Number],
        bonusArmor: Number,
        ammoFor: String,
        amount: Number,
        otherEffects: [String],
        canBeEquipped: [String],
        abilities: [{
            type: Schema.Types.ObjectId,
            ref: 'Ability'
        }],
    }
);


module.exports = mongoose.model('Item', itemSchema);