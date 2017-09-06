console.log("in order schema");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const OrderDetails = new Schema ({
	pickupLocation: {
		type: String,
		index: {
			unique: false
		}
	},
	dropLocation: {
		type: String,
		index: {
			unique: false
		}
	},
	packageType: {
		type: String,
		index: {
			unique: false
		}
	},
	deliveryType: {
		type:String,
		index: {
			unique: false
		}
	},
	paymentMethod: {
		type: String,
		index: {
			unique: false
		}
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'Admin',
		index: {
			unique: true
		}
	},
	packageTime: {
		type: Date,
		index: {
			unique: false
		},
		default: Date.now
	},
	customerName: {
		type: String,
		index: {
			unique: false
		}
	},
	customerNumber: {
		type: String,
		index: {
			unique: false
		}
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