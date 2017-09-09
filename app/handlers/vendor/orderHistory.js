const orderFind = require("../../models/vendor/orderSchema");
const VendorOrder = require("../../models/vendor/vendorOrderProvideSchema");

var orders = [];

const orderHistory = (req, res) => {
	VendorOrder.OrderVendor.find({
		userId: req.decoded.id
	}).then((data)=> {
		orders = data;
		res.json(orders);
	}).catch((err) => {
		console.log(err);
		res.json({message: "check the error in orderHistory"});
	});
	console.log(`${orders[0].userId} is the orders`);
};



module.exports = {
	orderHistory
};