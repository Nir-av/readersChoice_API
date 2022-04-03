const Payment = require("stripe")("sk_test_51KjknCJ7Yex7v5ZEnPUwiDjVwRwYFqcOEgqsUhbWZo7csxZtQZ9tr4ZRJpYISey0MirKBVu1BjGu93KyrLUztFAU00xjDhfaz0");
const uuid = require("uuid");


exports.payment_create = (req, res, next) => {
    
    Payment.customers.create({token: req.body.token, idempotencyKey: uuid.v4()},
        (error, data) => {
            if(error){
                res.status(400);
                res.json(error);
                console.log(data);
            }
            else{
                res.status(200);
                res.json(data);
                console.log(data);
            }
        } 
    )
}