const mongoose = require('mongoose');
const { Schema } = mongoose;
const postSchema = new Schema({
    posts: [
        {
            title: String,
            body: String,
            author: String,
            date: Date,
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