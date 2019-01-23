const mongoose = require('mongoose');
const { Schema } = mongoose;
const postSchema = new Schema({
    posts: [
        {
            title: String,
            body: String,
            author: String,
            authorId: String,
            date: String,
            comments: [
                {
                    comment: String,
                    postId: String,
                    user: String,
                    authorId: String,
                    date: String
                }
            ]
        }
    ]
});
mongoose.model('post', postSchema);