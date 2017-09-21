const vendorOrderConfirmed = require("../../../models/vendor/orderSchema");
const testOrder = require("../../../models/testSchema");
const vendorOrder = require("../../../models/vendor/vendorOrderProvideSchema");

const mongo = require("mongodb").MongoClient;
const config = require("../../../../config");
const Url = config.database;

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

const increment = (req, res, count) => {
	let value;
	if(req && count<9999) {
		count++;
		let num = condition(req, count);
		value = req+res+num+count;
	}
	return value;
};

const orderGenerate = (req, res) => {
	vendorOrder.OrderVendor.find({
		userId: req.decoded.id
	}).then((data)=> {
		const pd = data;

		vendorOrderConfirmed.VendorOrderConfirm.find({
			userID: req.decoded.id
		}).then((data)=> {
			const orders = data;
			
			vendorOrderConfirmed.VendorOrderConfirm.count().then((data)=> {
				const count = data;
				const storeArea = req.body.storeArea;
				const storeName = req.body.storeName;
				const id = orders[count-1].orderID;
				const slicedId = id.slice(5, 10);
				const idValue =  parseInt(slicedId);
				const orderId = increment(storeName, storeArea, idValue);
				
				const generatedOrder = new vendorOrderConfirmed.VendorOrderConfirm();
				generatedOrder.pickup = pd[0].pickupLocation;
				generatedOrder.drop = pd[0].dropLocation;
				generatedOrder.schedule = pd[0].packageType;
				generatedOrder.time = pd[0].packageTime;
				generatedOrder.details = pd[0].addrDetails;
				generatedOrder.customerName = pd[0].customerName;
				generatedOrder.orderID = orderId;
				generatedOrder.userID = req.decoded.id;

				generatedOrder.save()
				.then(()=> {
					res.json({message: "successfully saved"});
				}).catch((err)=> {
					console.log(err);
				});

			}).catch((err)=> {
				console.log(err);
			});

		}).catch((err)=> {
			console.log("error");
		});

	}).catch((err)=> {
		console.log(err);
	});
};

module.exports = {
	orderGenerate
};