var express = require('express');
var mongodb = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var bookRouter = express.Router();

var router = function (nav) {
    var url = 'mongodb://mongodb:27017';
    var books = [];

    bookRouter.use(function(req, res, next) {
        if (!req.user) {
            res.redirect('/');
        }
        next();
    });
    bookRouter.route('/').get(function (req, res) {
        mongodb.connect(url, function (err, client) {
            var db = client.db('libraryApp');
            var collection = db.collection('books');

            collection.find({}).toArray(function (err, results) {
                res.render('books', {
                    title: 'Hello from render',
                    books: results,
                    nav: nav
                });
            });
        });
    });

    bookRouter.route('/:id').get(function (req, res) {
        var id = new ObjectId(req.params.id);

        mongodb.connect(url, function (err, client) {
            var db = client.db('libraryApp');
            var collection = db.collection('books');

            collection.findOne({_id: id}, function (err, results) {
                res.render('book', {
                    title: 'Hello from render',
                    nav: nav,
                    book: results
                }
                );
            });
        });
    });

    return bookRouter;
};

module.exports = router;
