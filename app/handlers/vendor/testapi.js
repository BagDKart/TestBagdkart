const testing = require("../../models/testingSchema");
// const vendorOrderConfirmed = require("../../models/vendor/orderSchema");
// const VendorOrder = require("../../models/vendor/vendorOrderProvideSchema");
const config = require("../../../config");
const mongo = require("mongodb").MongoClient;
const secretKey = config.secretKey;
const url = config.database;

const trial = (req, res) => {
	const one = new testing.testing ();
	one.userId = req.decoded.id;
	one.save()
		.then((data)=> {
			res.json(data);
		}).catch((err)=> {
			res.json(err);
		});
};

module.exports = {
	trial
};