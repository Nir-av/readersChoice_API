const mongoose = require('mongoose');

const Book = require('../models/books');

exports.books_get_all = (req, res, next) => {
    Book.find().exec()
        .then((docs) => {
            res.status(200).json({
                count: docs.length,
                books: docs.map(doc => {
                    return {
                        _id: doc._id,
                        title: doc.title,
                        imageURL: doc.imageURL,
                        authorName: doc.authorName,
                        img: doc.img,
                        synopsis: doc.synopsis,
                        publisher: doc.publisher,
                        release_date: doc.release_date,
                        category: doc.category
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

exports.books_create_book = (req, res, next) => {
    const book = new Book({
    _id: mongoose.Types.ObjectId(),
    title: req.body.title,
    imageURL: req.body.imageURL,
    authorName: req.body.authorName,
    img: req.body.img,
    synopsis: req.body.synopsis,
    publisher: req.body.publisher,
    release_date: req.body.release_date,
    category: req.body.category
    });
    return book.save()
    .then((result) => {
    res.status(201).json({
        message: 'book stored.',
        book: result,
    });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({
        error: err
    });
});
}

exports.books_get_book = (req, res, next) => {
    Book.findById(req.params.bookId).exec()
        .then(book => {
            if (!book) {
                return res.status(404).json({ message: 'book not found' });
            }
            res.status(200).json({
                book: book,
            })
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}

exports.books_delete_book = (req, res, next) => {
    Book.remove({ _id: req.params.bookId }).exec()
        .then(result => {
            res.status(200).json({
                message: 'Book Deleted!'
            })
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}