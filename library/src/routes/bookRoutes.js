var express = require('express');
var mongodb = require('mongodb');
var bookRouter = express.Router();

var router = function (nav) {
    var url = 'mongodb://mongodb:27017';
    var books = [];

    bookRouter.route('/').get(function (req, res) {
        mongodb.connect(url, function (err, client) {
            var db = client.db('libraryApp');
            var collection = db.collection('books');

            collection.find({}).toArray(function (err, results) {
                res.render('books', {
                    title: 'Hello from render',
                    books: results,
                    nav: nav
                }
                );
            });
        });
    });

    bookRouter.route('/:id').get(function (req, res) {
        var id = req.params.id;

        res.render('book', {
                title: 'Hello from render',
                nav: nav,
                book: books[id]
            }
        );
    });

    return bookRouter;
};

module.exports = router;
