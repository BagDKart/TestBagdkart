console.log("in vendor schema");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VendorFields = new Schema({
	eId: {
		type: Number,
	},
	username: {
		type: String,
		required: true,
		index: {
			unique: true
		}
	},
	password: {
		type: String,
		required: true,
		selected: false
	},
	email: {
		type: String,
		required: true
	},
	firstName: {
		type: String.
	},
	lastName: {
		type: String
	},
	phoneNumber: {
		type: Number,
		required: true
	},
	businessName: {
		type: String,
		required: true
	},
	businessAddress: {
		type: String,
		required: true
	}
});

const Vendor = mongoose.model("Vendor", VendorFields);

module.exports = Vendor;