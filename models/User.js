const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
    googleId: String,
    displayName: String,
    postHistory: Array
});
mongoose.model('user', userSchema);
