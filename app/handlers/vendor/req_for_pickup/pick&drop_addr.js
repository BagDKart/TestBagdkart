console.log("pick and drop address js page");

const vendorOrder = require("../../../models/vendor/vendorOrderProvideSchema");
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

	vDetails.save()
		.then((data)=> {
		res.json(`Vdetails saved ${data}`);
	}).catch((err)=> {
		res.json(`Vdetails failed : ${err}`);
	});

};

const showDetails = (req, res)=> {
	VendorOrder.OrderVendor.find({}, (err, result)=> {
		if(err) return err;
		res.send(result);
		console.log(result);
	});
};

const appendDetails = (req, res)=> {
	mongo.connect(url)
		.then((db)=> {
			db.collection("ordervendors").find({pickupLocation: "mohan nagar"}).toArray((err, result)=> {
				if(err) return err;
				const location = {testValue: "test"}
				const mylocation = { $set: {testValue: "jambalakadi pamba"} };
				db.collection('testings').update(location, mylocation).then((data)=> {
					console.log("insertion successful");
					res.send(`the values are ${data}`);
				}).catch((err)=> {
					console.log("there was as error");
				});
			});
		}).catch((err)=> {
			console.log("error in db");
		})
};

module.exports = {
	vendorDetails,
	showDetails,
	appendDetails
};