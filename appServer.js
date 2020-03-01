const _express = require('express');
const _bodyParser = require('body-parser');

const _booksRouter = require('./routers/books-router');

// Express Listen port
const app = _express();
app.listen(5000, listenPort);

function listenPort() {
    console.log('Server is running on post 5000')
}

//Home
app.get('/', function (req, res) {
    res.send('Hello NodeJs')
});

//Books Router
app.use('/api', _booksRouter);

//body parsing middleware.
app.use(_bodyParser.json());

//Basic informarion send
app.get('/contact', function (req, res) {
    res.send('Please sned a mail to NodeJs@gmail.com');
});