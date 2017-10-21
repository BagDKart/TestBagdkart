console.log("pick and drop address js page");

const vendorOrder = require("../../../models/vendor/vendorOrderProvideSchema");
const idGeneratorInv = require("../invIDGenerator");

const config = require("../../../../config");
const mongo = require("mongodb").MongoClient;
const secretKey = config.secretKey;
const url = config.database;

const vendorDetails = (req, res) => {

	const vDetails = new vendorOrder.OrderVendor();
	vDetails.pickupLocation = req.body.pickup;
	vDetails.dropLocation = req.body.drop;
	vDetails.packageType = req.body.type;
	vDetails.deliveryType = req.body.delivery;
	vDetails.useridVendor = req.decoded.id;
	vDetails.customerName = req.body.cName;
	vDetails.customerNumber = req.body.cNumber;
	vDetails.addrDetails = req.body.addrDetails;
	vDetails.specInstruc = req.body.instructions;
	vDetails.packageTime = req.body.time;

	vDetails.save()
		.then((data)=> {
		res.json(data);
	}).catch((err)=> {
		res.json(`Vdetails failed : ${err}`);
	});

};

// const rCondition = (name, id)=> {
// 	console.log("this is in rcondition function");
// 	let rnumber;
// 	if(name && id<9) {
// 		rnumber = "0000";
// 	}
// 	else if(name && id<99){
// 		rnumber = "000"
// 	} else if(req && id<999) {
// 		rnumber = "00"
// 	} else if(req && id<9999) {
// 		rnumber = "0" 
// 	}
// 	else {
// 		console.log(`exceeded ${id}`);
// 	}
// 	return rnumber;
// };

// const rIncrement = (name, area, id)=> {
// 	console.log("this is in increment function");
// 	let rvalue;
// 	console.log(id);
// 	if(name && id<9999) {
// 		id++;
// 		let num = rCondition(name, id);
// 		rvalue = `R`+name+area+num+id;
// 		console.log(`this is value in increment func ${rvalue}`);
// 	} else {
// 		console.log("in else loop of rIncrement");
// 	}
// 	return rvalue;
// };

const appendDetails = (req, res)=> {
	mongo.connect(url)
		.then((db)=> {
			db.collection("ordervendors").find({useridVendor: req.decoded.id}).toArray((err, result)=> {
				// res.json(result);
				let requestId = "";
				let storeArea = req.body.storeArea;
				let storeName = req.body.storeName;
				if(result.length==0) {
					requestId = `R${storeName}${storeArea}00001`;
				} else {
					let count = result.length;
						count = result[count-1].reqID;
						count = count.slice(6, 11);
					let ridValue =  parseInt(count);
					let roleVendorReq = "R";
					requestId = idGeneratorInv.increment(roleVendorReq, storeName, storeArea, ridValue);
					// res.json(requestId);
				}
				const vDetails = new vendorOrder.OrderVendor();
				vDetails.pickupLocation = req.body.pickup;
				vDetails.dropLocation = req.body.drop;
				vDetails.packageType = req.body.type;
				vDetails.deliveryType = req.body.delivery;
				vDetails.useridVendor = req.decoded.id;
				vDetails.customerName = req.body.cName;
				vDetails.customerNumber = req.body.cNumber;
				vDetails.addrDetails = req.body.addrDetails;
				vDetails.specInstruc = req.body.instructions;
				vDetails.packageTime = req.body.time;
				vDetails.reqID = requestId;

				vDetails.save()
					.then((data)=> {
					res.json(data);
				}).catch((err)=> {
					res.json(`Vdetails failed : ${err}`);
				});
			});
		}).catch((err)=> {
			console.log("error in db");
		});
};

module.exports = {
	vendorDetails,
	appendDetails
};