const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const customerModel = new Schema({
    name: { type: String, required: true, unique: true},
    address: { type: String, required: true}
});
// Export the model
module.exports = mongoose.model('customers', customerModel);