const Testing = require("../../models/testingSchema");
const vendorOrderConfirmed = require("../../models/vendor/orderSchema");
const VendorOrder = require("../../models/vendor/vendorOrderProvideSchema");
const config = require("../../../config");
const mongo = require("mongodb").MongoClient;
const secretKey = config.secretKey;
const url = config.database;

const condition = (req)=> {
	let number;
	if(req<9) {
		number = "0000";
	}
	else if(req<99){
		number = "000"
	} else if(req<999) {
		number = "00"
	} else if(req<9999) {
		number = "0" 
	}
	else {
		console.log(`exceeded ${req}`);
	}
	return number;
};

const increment = (req) => {
	let value;
	if(req<9999) {
		let num = condition(req);
		req++;
		value = "req+res+"+num+req;
	}
	return value;
};


const trial = (req, res) => {
	const test1 = "test2";
	vendorOrderConfirmed.VendorOrderConfirm.find({
		userID: req.decoded.id
	}).then((data)=> {
		const orders = data;
		vendorOrderConfirmed.VendorOrderConfirm.count().then((data)=> {
			const id = orders[data-1].orderID;
			const slicedId = id.slice(5, 10);
			const idValue =  parseInt(slicedId);
			var sendValues = increment(idValue);
			res.json(sendValues);
		}).catch((err)=> {
			console.log(err);
		});

	}).catch((err)=> {
		console.log("error");
	});
};

module.exports = {
	trial
};