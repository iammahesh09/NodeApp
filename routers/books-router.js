const _express = require('express');
const _booksCtrl = require('./../controllers/books.ctrl');

const _router = _express.Router();

_router.get('/books', _booksCtrl.getAllBooks);
_router.get('/books/:id', _booksCtrl.getBookId);
_router.post('/books', _booksCtrl.saveBook);

module.exports = _router;