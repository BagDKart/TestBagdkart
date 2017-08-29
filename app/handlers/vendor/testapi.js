const Testing = require("../../models/testingSchema");
const VendorOrder = require("../../models/vendor/vendorOrderProvideSchema");
const config = require("../../../config");
const mongo = require("mongodb").MongoClient;
const secretKey = config.secretKey;
const url = config.database;

function trial (req, res) {
	const test1 = "test2";

	const TestingValues = new Testing.Testing({
		testValue: test1,
		testId: req.decoded.id
	});

	// TestingValues.save()
	// 	.then((value)=> {
	// 	console.log(value);
	// 	res.send(value);
	// }).catch((err)=> {
	// 	console.log("the values are error");
	// 	res.send(`couldnt store properly`);
	// });

	Testing.Testing.findOne({
		testValue: "test"
	}, (err, result)=> {
		if(err) return err;
		console.log(result);
		res.send(result);
	});
};

module.exports = {
	trial
};