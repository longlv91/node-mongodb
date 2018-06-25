const Customer = require('../models/customerModel');

//Simple version, without validation or sanitation
exports.list = function (req, res, next) {
	Customer.find({}, function(err, customers) {
		if (err) return next(err);
		res.send(customers);
	});
};

exports.create = function (req, res, next) {
    let customer = new Customer(
        {
            name: req.body.name,
            address: req.body.address
        }
    );

    customer.save(function (err) {
        if (err) {
            res.status(500).json({
                message: "Customer name is existed. Please try again."
            });
            return next(err);
        }
        res.send('Customer Created successfully');
        res.end();
    })
};