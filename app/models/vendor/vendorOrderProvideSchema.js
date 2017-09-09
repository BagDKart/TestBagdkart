console.log("in order schema");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const OrderDetails = new Schema ({
	pickupLocation: {
		type: String,
		index: {
			unique: false
		},
		required: true
	},
	dropLocation: {
		type: String,
		index: {
			unique: false
		},
		required: true
	},
	packageType: {
		type: String,
		index: {
			unique: false
		},
		required: true
	},
	deliveryType: {
		type:String,
		index: {
			unique: false
		},
		required: true
	},
	paymentMethod: {
		type: String,
		index: {
			unique: false
		},
		required: true
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'Admin',
		index: {
			unique: true
		},
		required: true
	},
	packageTime: {
		type: Date,
		index: {
			unique: false
		},
		default: Date.now,
		required: true
	},
	customerName: {
		type: String,
		index: {
			unique: false
		},
		required: true
	},
	customerNumber: {
		type: String,
		index: {
			unique: false
		},
		required: true
	},
	addrDetails: {
		type: String,
		index: {
			unique: false
		}
	},
	specInstruc: {
		type: String,
		index: {
			unique: false
		}
	}
});

const OrderVendor = mongoose.model("OrderVendor", OrderDetails);

module.exports = {
	OrderVendor
};