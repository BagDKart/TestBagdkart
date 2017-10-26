const testing = require("../../models/testingSchema");
// const vendorOrderConfirmed = require("../../models/vendor/orderSchema");
// const VendorOrder = require("../../models/vendor/vendorOrderProvideSchema");
const config = require("../../../config");
const mongo = require("mongodb").MongoClient;
const secretKey = config.secretKey;
const url = config.database;

const trial = (req, res) => {
	const one = new testing.testing ();
	one.time = req.body.time;
	if(one) {
		trail2(one);
	} else {
		console.log("in trail");
	}
};

const trail2 = (req)=> {
	console.log("in trail2");
	res.json("in control 2");
}


module.exports = {
	trial,
	trail2
};