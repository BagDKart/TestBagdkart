const vendorProfile = require("../../../models/vendor/vendorSchema");

const profileView = (req, res) => {
	console.log(req.decoded.id);
	vendorProfile.Vendor.find({
		username: req.body.username
	}).then((data)=> {
		// console.log(data);
		res.json(data);
	}).catch((err)=> {
		console.log(err);
		res.json({message:"profile is not correct"});
	});
};

module.exports = {
	profileView
};