const passport = require('passport');
const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('user');
const Posts = mongoose.model('posts');
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

    });

    app.post('/api/creating_post' , (req, res) => {
        User.findById(req.user._id, function(err, user){
            user.postHistory.push(req.body);
            user.save();
        })

        res.end();
    })
};