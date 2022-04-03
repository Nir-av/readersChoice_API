const express = require('express');
const router = express.Router();

const BooksReviewController = require('../controllers/booksReview');

router.post('/', BooksReviewController.booksreview_create_bookreview);

router.get('/', BooksReviewController.booksreview_get_all);

router.get('/:bookreviewId', BooksReviewController.booksreview_get_bookreview);

router.delete('/:bookreviewId', BooksReviewController.booksreview_delete_bookreview);

module.exports = router;
