console.log("in api.js");
const Admin = require("../models/adminSchema");
const Test = require("../models/testSchema");
const TestingValue = require("../models/testingSchema");
const VendorOrder = require("../models/orderSchema");
const createVendor = require("../handlers/vendor/createVendor.js");
const createAdmin = require("../handlers/admin/createAdmin.js");
const createDriver = require("../handlers/driver/createDriver.js");

const adminLogin = require("../handlers/admin/loginAdmin.js");
const vendorLogin = require("../handlers/vendor/loginVendor.js");

const vendorPD = require("../handlers/vendor/req_for_pickup/pick&drop_addr");

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
		const pickup = "kothapet"
		const testing = new Test ({
			test: new Admin(),
			password: req.body.password
		});

		console.log(testing.test);
		res.json(testing);
		// testing.save()
		// 		.then(()=> {
		// 			console.log("test successful");
		// 			res.json({message: "check for values in mlab"});
		// 		});
	});
	api.post("/createVendor", createVendor);

	api.post("/createAdmin", createAdmin);

	api.post("/createDriver", createDriver);

	api.post("/adminLogin", adminLogin);

	api.post("/vendorLogin", vendorLogin);

	api.post("/vendorPD", vendorPD);

	console.log("in module.exports of api");

	return api;
}