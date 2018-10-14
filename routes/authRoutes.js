const passport = require('passport');
const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('user');
const Posts = mongoose.model('post');
const app = express();

module.exports = app => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    })
    );

    app.get('/auth/google/callback', passport.authenticate('google'),(req,res)=>{
        res.redirect('/');
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    app.get('/api/post_list', (req, res) => {
        Posts.find({}, function(err, post_list){
            res.json(post_list);
        })
    });

    app.post('/api/create_post', (req, res) => {
        const userPost = req.body;
        //add author's name to object
        userPost['author'] = req.user.displayName;
        //add the date
        const day = ((new Date()).toDateString());
        userPost['date'] = day;

        Posts.findById("5bb45460fb6fc0196221d111", function(err, post_list){
            post_list.posts.push(userPost);
            post_list.save();
        });
        User.findById(req.user._id, function(err, user){
            user.postHistory.push(userPost);
            user.save();
        })

        res.end();
    });

    app.post('/api/postComment', (req, res) => {
        Posts.findById("5bb45460fb6fc0196221d111", function(err, post_list){
            for(let i = 0; i < post_list.posts.length; i++){
                if(String(post_list.posts[i]._id) === req.body.postId){
                    post_list.posts[i].comments.push(req.body);
                    break;
                }
            }
            post_list.save();
        });
        res.end();
    });

};