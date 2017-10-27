const testing = require("../../models/testingSchema");
const config = require("../../../config");
const mongo = require("mongodb").MongoClient;
const secretKey = config.secretKey;
const url = config.database;

const trailing = (req, res)=> {
	console.log("in trail2");
	res.json("in trail2");
};

const trial = (req, res) => {
	const one = new testing.testing ();
	one.time = req.body.time;
	if(one) {
		console.log("time is present");
		res.json(one);
	} else {
		console.log("in trail");
	}
};

module.exports = {
	trial
};
