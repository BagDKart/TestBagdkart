console.log("in order schema");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderDetails = new Schema({
	pickupLocation: {
		required: true,
		type: String
	},
	dropLocation: {
		required: true,
		type: String
	},
	packageType: {
		required: true,
		type: String
	},
	deliveryType: {
		required: true,
		type:String
	},
	paymentMethod: {
		required: true,
		type: String
	}
});

const VendorOrder = mongoose.model("VendorOrder", OrderDetails);

module.exports = VendorOrder;