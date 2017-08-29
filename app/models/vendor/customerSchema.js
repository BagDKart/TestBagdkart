const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerDetails = new Schema({
	customerName: {
		type: String,
		required: true
	},
	customerPhNo: {
		type: Number
	},
});

const Customer = mongoose.model("Customer", CustomerDetails);

module.exports = {
	Customer
};