const mongoose = require('mongoose');
const { Schema } = mongoose;
const postSchema = new Schema({
    posts: [
        {
            title: String,
            body: String,
            author: String,
            authorID: String,
            date: String,
            upvotes: Number,
            downvotes: Number,
            comments: [
                {
                    commentAuthor: String,
                    commentBody: String
                }
            ]
        }
    ]
});
mongoose.model('post', postSchema);