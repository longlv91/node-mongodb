const Customer = require('../models/customerModel');

//Simple version, without validation or sanitation
exports.list = function (req, res) {
	Customer.find({}, function(err, customers) {
		if (err) return next(err);
		res.send(customers);
	});
};

exports.create = function (req, res) {
    let customer = new Customer(
        {
            name: req.body.name,
            address: req.body.address
        }
    );

    customer.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Customer Created successfully')
    })
};