var express = require('express');

var app = express();

var port = 3000;

app.listen(5000, function (err) {
    console.log('running server on port ' + port);
});