var express = require('express');
var mongodb = require('mongodb').MongoClient;
var authRouter = express.Router();

module.exports = function () {
    authRouter.route('/signUp').post(function (req, res) {
        var url = 'mongodb://mongodb:27017';

        mongodb.connect(url, function (err, client) {
            var db = client.db('libraryApp');
            var collection = db.collection('users');
            var user = {
                username: req.body.userName,
                password: req.body.password
            };

            collection.insert(user, function (err, results) {
                req.login(results.ops[0], function () {
                    res.redirect('/Auth/profile');
                });
            });
        });
    });

    authRouter.route('/profile').get(function (req, res) {
        res.json(req.user);
    });

    return authRouter;
};