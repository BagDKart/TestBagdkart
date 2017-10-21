const mongo = require("mongodb").MongoClient;
const config = require("../../../config.js");
const urL = config.database;

const cancelOrder = (req, res) => {
	mongo.connect(urL, (err, db) => {
		if(err) return err;

		console.log("connected successfully in cancel order");
		
		db.collection('vendororderconfirms')
		.updateOne({orderID: req.body.orderId}, {$set:{status: false}})
		.then((data)=> {
			console.log("updated successfully");
			res.json("order has been cancelled");
		}).catch((err)=>{
			console.log(err);
		});
	});
	console.log({message: "cancelling the order"});
};

module.exports = {
	cancelOrder
};