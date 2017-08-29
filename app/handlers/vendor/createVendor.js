console.log("in create vendor");
const Vendor = require("../../models/vendor/vendorSchema");
module.exports = (req, res) => {
	const vendorUser = new Vendor.Vendor ({
		username: req.body.username,
		password: req.body.password,
		firstName: req.body.firstname,
		lastName: req.body.lastname,
		email: req.body.email,
		eId: req.body.id,
		phoneNumber: req.body.phonenumber,
		businessName: req.body.businessname,
		businessAddress: req.body.businessaddress
	});

	vendorUser.save()
			.then(()=> {
				console.log(vendorUser);
				console.log("vendor saved");
				res.json({message: "vendor details saved"});
			})
			.catch((err)=> {
				console.log("error in saving vendor");
				res.json({message: "vendor not saved"});
			});
};