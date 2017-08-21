console.log("pick and drop address js page");

const VendorOrder = require("../../../models/orderSchema");

const Details = (req, res) => {

	const Vdetails = new VendorOrder.OrderVendor({
		userId: req.decoded.id,
		pickupLocation : req.body.pickup,
		dropLocation : req.body.drop,
		packageType : req.body.type, 
		deliveryType : req.body.delivery,
		paymentMethod : "contract",
		packageTime : req.body.time,
	});


	Vdetails.save()
		.then((data)=> {
		console.log(`Vdetails saved ${data}`);
	}).catch((err)=> {
		console.log(`Vdetails failed : ${err}`);
	});

	console.log(Vdetails);

	res.send(Vdetails);
};

module.exports = {
	Details
};