const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Order = new Schema({
	orderID: {
		type: String,
		index: {
			unique: true
		}
	},
	driverName: {
		type: String,
		ref: 'Driver'
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
		type: String,
		ref: "OrderVendor"
	}
});

const VendorOrder = mongoose.model('VendorOrder', Order);

module.exports = {
	VendorOrder
};