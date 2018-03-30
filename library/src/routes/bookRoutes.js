var express = require('express');

var bookRouter = express.Router();

var books = [
    {
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Lev Nikolayevich Tolstoy',
        read: false
    },
    {
        title: 'Les Misérables',
        genre: 'Historical Fiction',
        author: 'Victor Hugo',
        read: false
    },
    {
        title: 'The Dark World',
        genre: 'Fantasy',
        author: 'Henry Kuttner',
        read: false
    },
    {
        title: 'A Journey into the Center of the Earth',
        genre: 'Science Fiction',
        author: 'Jules Verne',
        read: false
    }
];

bookRouter.route('/').get(function (req, res) {
    res.render('books', {
            title: 'Hello from render',
            nav: [
                {Link:'/Books', Text: 'Books'},
                {Link:'/Authors', Text: 'Authors'}
            ],
            books: books
        }
    );
});

bookRouter.route('/single').get(function (req, res) {
    res.send('Hello Single Book');
});

module.exports = bookRouter;
