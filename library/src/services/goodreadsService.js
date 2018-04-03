var http = require('https');
var parseString = require('xml2js').parseString;

var key = process.env.GOODREADS_KEY;

var goodreadService = function () {
    var getBookById = function (id, callback) {
        var options = {
            host: 'www.goodreads.com',
            path: '/book/show/' + id + '.xml?key=' + key
        };

        var requestCallBack = function (response) {
            var str = '';

            response.on('data', function (chunk) {
                str += chunk;
            });

            response.on('end', function () {
                parseString(str, function (err, result) {
                    callback(null, result.GoodreadsResponse.book[0]);
                });
            });
        };

        http.get(options, requestCallBack).end();
    };

    return {
        getById: getBookById
    };
};

module.exports = goodreadService;