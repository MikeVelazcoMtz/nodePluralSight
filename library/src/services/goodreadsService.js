var goodreadService = function () {
    var getBookById = function (id, callback) {
        callback(null, {description: 'Our description'});
    };

    return {
        getById: getBookById
    };
};

module.exports = goodreadService;