console.log("pick and drop address js page");

const VendorOrder = require("../../../models/vendor/vendorOrderProvideSchema");
const config = require("../../../../config");
const mongo = require("mongodb").MongoClient;
const secretKey = config.secretKey;
const url = config.database;

const Details = (req, res) => {

	const Vdetails = new VendorOrder.OrderVendor({
		userId: req.decoded.id,
		pickupLocation : req.body.pickup,
		dropLocation : req.body.drop,
		packageType : req.body.type, 
		deliveryType : req.body.delivery,
		paymentMethod : "contract",
		customerName: req.body.customerName,
		customerNumber: req.body.customerNumber,
		packageTime : req.body.time,
		addrDetails: req.body.addrDetails,
		specInstruc: req.body.instructions
	});


	Vdetails.save()
		.then((data)=> {
		console.log(`Vdetails saved ${data}`);
	}).catch((err)=> {
		console.log(`Vdetails failed : ${err}`);
	});

	res.send(Vdetails);
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
				// console.log(result);
				// res.send(result);
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
	Details,
	showDetails,
	appendDetails
};