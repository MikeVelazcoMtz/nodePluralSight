var express = require('express');
var mongodb = require('mongodb').MongoClient;
var authRouter = express.Router();

module.exports = function () {
    authRouter.route('/signUp').post(function (req, res) {
        req.login(req.body, function () {
            res.redirect('/Auth/profile');
        });
    });

    authRouter.route('/profile').get(function (req, res) {
        res.json(req.user);
    });

    return authRouter;
};