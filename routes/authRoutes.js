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

    app.get('/api/testcreate', (req, res) => {
        Posts.findById("5bb45460fb6fc0196221d111", function(err, post_list){
            post_list.posts.push({title: "test2", body: "body2"});
            post_list.save();
            console.log(post_list.posts);
        })
        res.end();
    });

    app.post('/api/creating_post' , (req, res) => {
        User.findById(req.user._id, function(err, user){
            user.postHistory.push(req.body);
            user.save();
        })

        res.end();
    })
};