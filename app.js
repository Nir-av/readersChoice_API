const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');


const userRoutes = require('./api/routes/user');
const booksRoutes = require('./api/routes/books');
const booksReviewRoutes = require('./api/routes/booksReview');
const paymentRoutes = require('./api/routes/payment');

// connecting to mongodb
const db = 'mongodb+srv://' + process.env.MONGO_ATLAS_USER + ':'
    + process.env.MONGO_ATLAS_PW +
    '@readerschoice.bd8dk.mongodb.net/ReadersChoice';
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
// responsible for parsing the incoming request in the bodies.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use('/users', userRoutes);
app.use('/books', booksRoutes);
app.use('/booksReview', booksReviewRoutes);
app.use("/payment", paymentRoutes);

app.use(helmet());
app.use(compression());

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});


module.exports = app;
