var express = require('express');

var adminRouter = express.Router();

module.exports = function (nav) {
    adminRouter.route('/addBooks').get(function (req, res) {
        res.send('Inserting books.....');
    });

    return adminRouter;
};
