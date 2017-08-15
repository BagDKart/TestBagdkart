console.log("pick and drop address js page");

const vendorOrder = require("../../../models/orderSchema");

module.exports = (req, res) => {
	const pickup = req.body.pickup;
	const drop = req.body.drop;
	console.log(pickup+", "+drop);
	res.send({message: "in pick & drop address saving api"});
};