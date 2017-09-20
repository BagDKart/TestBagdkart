const Testing = require("../../models/testingSchema");
const vendorOrderConfirmed = require("../../models/vendor/orderSchema");
const VendorOrder = require("../../models/vendor/vendorOrderProvideSchema");
const config = require("../../../config");
const mongo = require("mongodb").MongoClient;
const secretKey = config.secretKey;
const url = config.database;

const trial = (req, res) => {
	let firstValue = req.body.valueOne;
	let secondValue = req.body.valueTwo;
	secondValue = secondValue + firstValue;
	console.log(secondValue);
	res.json({message: "test successful"});
};

module.exports = {
	trial
};