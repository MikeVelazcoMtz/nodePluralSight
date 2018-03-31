var express = require('express');

var authorRouter = express.Router();

module.exports = function (nav) {
    authorRouter.route('/').get(function (req, res) {
        res.send('Hello Authors');
    });

    authorRouter.route('/:id').get(function (req, res) {
        res.send('Hello Author #' + req.params.id);
    });

    return authorRouter;
};