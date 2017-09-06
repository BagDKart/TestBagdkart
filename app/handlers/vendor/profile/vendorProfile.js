const vendorProfile = require("../../../models/vendor/vendorSchema");

const profileView = (req, res) => {
	Vendor.find({
		username: req.decoded.id
	},(err, user)=> {
		if(err) return err;

		res.json(user);
	});
}

module.exports = {
	profileView
}