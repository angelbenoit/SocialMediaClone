const mongoose = require('mongoose');
const { Schema } = mongoose;
const postSchema = new Schema({
    posts: Array
});
mongoose.model('posts', postSchema);