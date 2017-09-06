const orderFind = require("../../models/vendor/orderSchema");

const orderHistory = (req, res) => {
	orderFind.VendorOrder.find({
		userId: req.decoded.id
	}).then((data)=> {
		console.log(data);
		res.send(data);
	}).catch((err) => {
		console.log("check orderHistory");
		res.json({message: "check the error in orderHistory"});
	});
};

module.exports = {
	orderHistory
};