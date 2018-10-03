const mongoose = require('mongoose');
const { Schema } = mongoose;
const postSchema = new Schema({
    posts: [
        {
            title: String,
            body: String
        }
    ]
});
mongoose.model('post', postSchema);