const mongo = require("mongodb").MongoClient;
const config = require("../../../config.js");
const urL = config.database;
const objectID = require("mongodb").ObjectID;

const cancelledOrder = (req, res) => {
	let id = new objectID(req.decoded.id);
	console.log(req.decoded.id);
	mongo.connect(urL, (err, db) => {
		if(err) return err;

		console.log("connected successfully in cancel order");
		
		db.collection('vendororderconfirms').find({status: false, "_id": id}).toArray((err, result)=>{
			if(err) console.log(err);
			console.log(result);
			res.json(result);
		});
	});
	console.log({message: "cancelled the order details"});
};

module.exports = {
	cancelledOrder
};