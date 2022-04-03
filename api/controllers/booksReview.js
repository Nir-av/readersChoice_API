const mongoose = require('mongoose');

const BookReview = require('../models/booksReview');

exports.booksreview_get_all = (req, res, next) => {
    BookReview.find().exec()
        .then((docs) => {
            res.status(200).json({
                count: docs.length,
                reviews: docs.map(doc => {
                    return {
                        _id: doc._id,
                        addReview: doc.addReview,
                        bookId: doc.bookId,
                        userName: doc.userName
                    }
                })
            });
        }).catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

exports.booksreview_create_bookreview = (req, res, next) => {
    const bookReview = new BookReview({
    _id: mongoose.Types.ObjectId(),
    addReview: req.body.addReview,
    bookId: req.body.bookId,
    userName: req.body.userName
    });
    return bookReview.save()
    .then((result) => {
    res.status(201).json({
        message: 'book review stored.',
        bookReview: result,
    });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({
        error: err
    });
});
}

exports.booksreview_get_bookreview = (req, res, next) => {
    BookReview.findById(req.params.bookreviewId).exec()
        .then(bookReview => {
            if (!bookReview) {
                return res.status(404).json({ message: 'book review not found' });
            }
            res.status(200).json({
                bookReview: bookReview,
            })
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}

exports.booksreview_delete_bookreview = (req, res, next) => {
    BookReview.remove({ _id: req.params.bookreviewId }).exec()
        .then(result => {
            res.status(200).json({
                message: 'BookReview Deleted!'
            })
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}