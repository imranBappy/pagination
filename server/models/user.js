const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    username: String,
    name: String,
    email: String,
    Sponsor: String,
    balance: String,
    club: String,
    active: Boolean,
    status: Boolean
},{timestamps: true})

const User = model('User', userSchema);

module.exports = User;
