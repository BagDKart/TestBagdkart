const mongoose = require("mongoose");
const Schmea = mongoose.Schema;

const vendorProfileSchema = new Schema ({
	vendorId: {
		type: Schema.Types.ObjectId,
		ref: 'Vendor',
		required: true
	},
});

const vendorProfile = mongoose.model('VendorProfile', vendorProfileSchema);

module.exports = {
	vendorProfile
};