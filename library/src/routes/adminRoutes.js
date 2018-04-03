var express = require('express');
var mongodb = require('mongodb').MongoClient;
var adminRouter = express.Router();

module.exports = function (nav) {
    adminRouter.route('/addBooks').get(function (req, res) {
        var books = [
            {
                title: 'War and Peace',
                genre: 'Historical Fiction',
                bookId: 656,
                author: 'Lev Nikolayevich Tolstoy',
                read: false
            },
            {
                title: 'Les Misérables',
                genre: 'Historical Fiction',
                bookId: 24280,
                author: 'Victor Hugo',
                read: false
            },
            {
                title: 'The Dark World',
                genre: 'Fantasy',
                bookId: 1881716,
                author: 'Henry Kuttner',
                read: false
            },
            {
                title: 'A Journey into the Center of the Earth',
                genre: 'Science Fiction',
                bookId: 32829,
                author: 'Jules Verne',
                read: false
            }
        ];

        var url = 'mongodb://mongodb:27017';

        mongodb.connect(url, function (err, client) {
            var db = client.db('libraryApp');
            var collection = db.collection('books');
            collection.insertMany(books, function (err, results) {
                res.send(results);
                db.close();
            });
        });
    });

    return adminRouter;
};
