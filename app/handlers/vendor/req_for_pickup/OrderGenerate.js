const vendorOrderConfirmed = require("../../../models/vendor/orderSchema");
const testOrder = require("../../../models/testSchema");
const vendorOrder = require("../../../models/vendor/vendorOrderProvideSchema");

const mongo = require("mongodb").MongoClient;
const config = require("../../../../config");
const Url = config.database;

let count = 0;
console.log(count);

const condition = (req, count)=> {
	let number;
	if(req && count<9) {
		number = "0000";
	}
	else if(req && count<99){
		number = "000"
	} else if(req && count<999) {
		number = "00"
	} else if(req && count<9999) {
		number = "0" 
	}
	else {
		console.log(`exceeded ${count}`);
	}
	return number;
};

const increment = (req, res) => {
	let value;
	if(req && count<9999) {
		count++;
		let num = condition(req, count);
		value = req+res+num+count;
	}
	return value;
};

const orderGenerate = (req, res) => {
	const storeArea = req.body.storeArea;
	const storeName = req.body.storeName;
	
	const orderId = increment(storeName, storeArea);

	// mongo.connect(Url, (err, db) => {
	// 	if(err) return err;
	// 	let vendors = db.collection('ordervendors');
	// 	vendors.find().toArray((err, result)=> {
	// 		if(err) return err;
	// 		orderPick = result[0].pickupLocation;
	// 		orderDrop = result[0].dropLocation;
	// 		orderTime = result[0].packageTime;
	// 		orderSchedule = result[0].packageType;
	// 		console.log(`${orderPick}, ${orderDrop}, ${orderTime}, ${orderSchedule}`);
	// 		console.log(orderId);
	// 		const confirmOrder = {};
	// 		confirmOrder.userID = req.decoded.id;
	// 		confirmOrder.orderID = orderId;
	// 		confirmOrder.pickup = orderPick;
	// 		confirmOrder.drop = orderDrop;
	// 		confirmOrder.schedule = orderSchedule;
	// 		confirmOrder.time = orderTime;
	// 		const orderConfirm = db.collection('vendororderconfirms');
	// 		orderConfirm.save(confirmOrder, (err, res)=> {
	// 			if(err) return err;
	// 			console.log("document inserted successfully");
	// 		});
	// 		res.send("successfully inserted");
	// 	});
	// });
	vendorOrder.OrderVendor.find({
		userId: req.decoded.id
	}).then((data)=> {
		console.log(data);
		const storeArea = req.body.storeArea;
		const storeName = req.body.storeName;
		const orderId = increment(storeName, storeArea);
		const generatedOrder = new vendorOrderConfirmed.VendorOrderConfirm();
		generatedOrder.pickup = data[0].pickupLocation;
		generatedOrder.drop = data[0].dropLocation;
		generatedOrder.schedule = data[0].packageType;
		generatedOrder.time = data[0].packageTime;
		generatedOrder.orderID = orderId;
		generatedOrder.userID = req.decoded.id;
		// generatedOrder.arrivalTime = req.body.arrival;
		generatedOrder.save()
		.then(()=> {
			res.json({message: "successfully saved"});
		}).catch((err)=> {
			console.log("there is a error");
		})
	}).catch((err)=> {
		console.log("there is a error");
	});
};

module.exports = {
	orderGenerate
}