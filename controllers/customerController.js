const Customer = require('../models/customerModel');
const uuidv4 = require('uuid/v4');

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
            guid: uuidv4(),
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
    })
};

exports.findByGuid = function (req, res, next) {
    Customer.findOne({guid: req.params.guid}, function(err, customer) {
        if (err) return next(err);
        res.send(customer);
    });
};

exports.update = function (req, res, next) {
    let customer = {};
    customer = Object.assign(customer, req.body);
    delete customer._id;
    Customer.findOneAndUpdate({guid: req.params.guid}, customer, {new: true}, function(err, data) {
        if (err) return next(err);
        res.jsonp({
            message:'Customer Updated successfully',
            data: data
        });
    });
};

exports.deleteByGuid = function (req, res, next) {
    Customer.deleteOne({ guid: req.params.guid }, function (err) {
        if (err) return next(err);
        res.jsonp({
            message:'Customer Deleted successfully'
        });
    });
};