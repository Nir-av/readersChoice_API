const mongoose = require('mongoose');

const bookReviewSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    addReview: {
        type: String
    },
    bookId:{
        type: String
    },
    userName: {
        type: String
    }
});

module.exports = mongoose.model('Reviews', bookReviewSchema);