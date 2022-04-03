const express = require('express');
const router = express.Router();


const BooksController = require('../controllers/books');

router.get('/', BooksController.books_get_all);

router.post('/', BooksController.books_create_book);

router.get('/:bookId', BooksController.books_get_book);

router.delete('/:bookId', BooksController.books_delete_book);

module.exports = router;