const Admin = require("../models/adminSchema");
const jwt = require("jsonwebtoken");
const config = require("../../config");
const secretKey = config.secretKey;

function createToken (user) {
	const token = jwt.sign({
		id: user._id,
		username: user.username,
		email: user.email
	}, secretKey);
	return token;
};

module.exports = (req, res) => {
	Admin.findOne({ 
		adminUsername: req.body.username
	},'adminPassword', function(err, user) {
		const adminJSON = JSON.parse(JSON.stringify(user));
		if(err) return err;
		if(!user) {
			return res.json({ message: " he is not admin" });
		} else if(user) {
			const validatePassword = user.comparePassword(req.body.password);
			if(!validatePassword) {
				console.log("enter correct password");
				res.json({ message: "enter correct password" });
			} else {
				const token = createToken(adminJSON);
				res.json({
					success: true,
					message: "Admin logged in",
					token: token
				});
			}
		}
	});
};