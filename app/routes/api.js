console.log("in api.js");
const Test = require("../models/testSchema");
const createVendor = require("../handlers/createVendor.js");
const createAdmin = require("../handlers/createAdmin.js");
const createDriver = require("../handlers/createDriver.js");
const adminLogin = require("../handlers/loginAdmin.js");
const vendorLogin = require("../handlers/loginVendor.js");

module.exports = (app, express)=>{
	const api = express.Router();
	
	api.get("/", (req, res)=> {
		Admin.find({}, (err, users) => {
			if(err) {
				console.log(err);
			} else {
				console.log(users);
				res.send(users);
			}
		});
	});

	api.post("/test", (req, res)=> {
		const testing = new Test ({
			username: req.body.username,
			password: req.body.password
		});

		testing.save()
				.then(()=> {
					console.log("test successful");
					res.json({message: "check for values in mlab"});
				});
	});
	api.post("/createVendor", createVendor);

	api.post("/createAdmin", createAdmin);

	api.post("/createDriver", createDriver);

	api.post("/adminLogin", adminLogin);

	api.post("/vendorLogin", vendorLogin);

	console.log("in module.exports of api");

	return api;
}