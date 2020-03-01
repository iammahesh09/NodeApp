const _express = require('express');
const bodyParser = require('body-parser');

const _booksRouter = require('./routers/books-router');

// Express Listen port
const app = _express();

// Listen ports
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on post ${port}`));

//Home
app.get('/', function (req, res) {
    res.send('Hello NodeJs')
});

//Books Router
app.use('/api/books', _booksRouter);

//body parsing middleware. support json encoded bodies
app.use(bodyParser.json());

//Basic informarion send
app.get('/contact', function (req, res) {
    res.send('Please sned a mail to NodeJs@gmail.com');
});