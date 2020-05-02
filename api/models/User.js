const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: String,
        email: String,
        googleId: String,
        characters: [{
            type: Schema.Types.ObjectId,
            ref: 'Character'
        }],
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('User', userSchema);