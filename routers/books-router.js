const _express = require('express');
const _booksCtrl = require('./../controllers/books.ctrl');

const _router = _express.Router();

_router.get('/', _booksCtrl.getAllBooks);
_router.get('/:id', _booksCtrl.getBookId);
_router.post('', _booksCtrl.saveBook);
_router.delete('/:id', _booksCtrl.removeBook);
_router.patch('/:id', _booksCtrl.updateBook);

module.exports = _router;