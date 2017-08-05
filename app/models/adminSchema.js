console.log("in adminSchema");
const mongoose = required("mongoose");
const Schema = mongoose.Schema;

const AdminDetails = new Schema({
	adminUsername: {
		type: String,
		required: true,
		index: {
			unique: true
		}
	},
	adminPassword: {
		type: String,
		required: true
	},
	adminFirstName: {
		type: String
	},
	adminLastName: {
		type: String
	},
	adminEmail: {
		type: String,
		required: true
	},
	adminId: {
		type: String,
		required: true
	}
});