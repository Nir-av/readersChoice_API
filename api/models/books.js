const mongoose = require('mongoose');

const booksSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        requiredd: true
    },
    synopsis: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    release_date: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Book', booksSchema);