var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

var port = process.env.PORT || 5000;

var nav = [
    {Link:'/Books', Text: 'Book'},
    {Link:'/Authors', Text: 'Author'}
];

var bookRouter = require('./src/routes/bookRoutes')(nav);
var authorRouter = require('./src/routes/authorRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);
var authRouter = require('./src/routes/authRoutes')();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({secret: 'library', resave: false, saveUninitialized: true}));
require('./src/config/passport')(app);

app.set('views', 'src/views');

app.set('view engine', 'ejs');

app.use('/Books', bookRouter);
app.use('/Authors', authorRouter);
app.use('/Admin', adminRouter);
app.use('/Auth', authRouter);

app.get('/', function (req, res) {
    res.render(
        'index',
        {
            title: 'Hello from render',
            nav: [
                {Link:'/Books', Text: 'Books'},
                {Link:'/Authors', Text: 'Authors'}
            ]
        }
    );
});

// Force to have the Goodread's API keys
if (!process.env.GOODREADS_KEY || !process.env.GOODREADS_SECRET) {
    throw 'UNSET GOODREADS API VARIABLES';
}

app.get('/books', function (req, res) {
    res.send('Hello Books!');
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});
