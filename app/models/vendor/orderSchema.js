const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderConfirm = new Schema({
	userID : {
		type: String,
		ref: 'Admin',
		required: true
	},
	orderID: {
		type: String,
		index: {
			unique: true
		}
	},
	driverName: {
		type: String,
		ref: 'Driver',
		default: "RAJU"
	},
	pickup: {
		type: String,
		ref: 'OrderVendor'
	},
	drop: {
		type: String,
		ref: 'OrderVendor'
	},
	schedule: {
		type: String,
		ref: "OrderVendor"
	},
	time: {
		type: Date,
		ref: "OrderVendor"
	},
	status: {
		type: Boolean,
		required: true,
		default: true
	},
	driverLicenseNumber: {
		type: String,
		ref: 'Driver',
		required: true,
		default: "RAJU1234LICENSE"
	},
	vehicleRegistrationNumber: {
		type: String,
		ref: 'Driver',
		required: true,
		default: "RAJU12345VEHICLENUMBER"
	},
	arrivalTime: {
		type: Date,
	}
});

const VendorOrderConfirm = mongoose.model('VendorOrderConfirm', OrderConfirm);

module.exports = {
	VendorOrderConfirm
};