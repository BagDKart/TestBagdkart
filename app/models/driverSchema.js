console.log("in driver schema");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DriverDetails = new Schema ({
	driverName: {
		type: String,
		required: true
	},
	driverPhoneNumber: {
		type: String,
		required: true
	},
	driverUsername: {
		type: String,
		required: true
		index: {
			unique: true
		}
	},
	driverPassword: {
		type: String,
		required: true,
		selected: false
	},
	driverCode: {
		type: String,
		required: true,
		index: {
			unique: true
		}
	},
	driverFirstName: {
		type: String,
	},
	driverLastName: {
		type: String,
	},
	driverEmail: {
		type: String,
		required: true
	},
	driverContactNumber: {
		type: Number,
		required: true
	},
	driverLicenceNumber: {
		type: String,
		required: true,
		index: {
			unique: true
		}
	},
	driverVechicleNumber: {
		type: String,
		required: true
	}
});

const Driver = mongoose.model("Driver", DriverDetails);
module.exports = Driver;