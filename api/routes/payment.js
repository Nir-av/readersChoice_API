const express = require('express');
const router = express.Router();

const paymentController = require("../controllers/payment");

router.route("/").post(paymentController.payment_create);

module.exports = router;