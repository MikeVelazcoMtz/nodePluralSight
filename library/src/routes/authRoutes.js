var express = require('express');
var mongodb = require('mongodb').MongoClient;
var authRouter = express.Router();

module.exports = function () {
    authRouter.route('/signUp').post(function (req, res) {
        console.log(req.body);
        res.send(req.body);
    });

    return authRouter;
};