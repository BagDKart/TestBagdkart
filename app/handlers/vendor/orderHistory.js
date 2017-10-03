const orderFind = require("../../models/vendor/orderSchema");
const vendorOrder = require("../../models/vendor/vendorOrderProvideSchema");

var orders = [];

const vendorSort = (data) => {
	vendorSortStatus(data);
};

const vendorSortStatus = (req,res,data) => {
	if(!data) return console.log("error in vendorSort");
	console.log(data);
	orderFind.VendorOrderConfirm.find({
		status: req.body.status
	}).then((data)=> {
		console.log("sorted using status");
	}).catch((err)=> {
		console.log("sorting failed");
	});
};


const orderHistory = (req, res) => {
	orderFind.VendorOrderConfirm.find({
		userID: req.decoded.id
	}).then((data)=> {
		// vendorSort(data);
		res.json(data);
	}).catch((err) => {
		console.log(err);
		res.json({message: "check the error in orderHistory"});
	});
};

module.exports = {
	orderHistory
};