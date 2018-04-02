var mongodb = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var url = 'mongodb://mongodb:27017';

var bookController = function (bookService, nav) {
    var getIndex = function (req, res) {
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
    };

    var getById = function (req, res) {
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
    };

    var middleware = function(req, res, next) {
        if (!req.user) {
            res.redirect('/');
        }
        next();
    };

    return {
        getIndex: getIndex,
        getById: getById,
        middleware: middleware
    };
};

module.exports = bookController;