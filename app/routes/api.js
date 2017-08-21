console.log("in api.js");

const jwt = require("jsonwebtoken");

const config = require("../../config");
const secretKey = config.secretKey;
const Test = require("../models/testSchema");
const Admin = require("../models/adminSchema");
// const TestingValue = require("../models/testingSchema");
const VendorOrder = require("../models/orderSchema");
const Vendor = require("../models/vendorSchema");
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

	api.post("/test/:token", (req, res)=> {
		const pickup = "kothapet";
		console.log(`these are request params.. ${req.params}`)
		const token = req.params.token;
		
		if(token) {
			console.log("token is present");
			res.send(req.params.token);
		} else {
			console.log("token is absent");
			res.send("no token");
		}
	});

	api.post("/globalTest", (req, res)=> {
		console.log(global);
		res.json("check the console");
	});

	api.post("/createVendor", createVendor);

	api.post("/createAdmin", createAdmin);

	api.post("/createDriver", createDriver);

	api.post("/adminLogin", adminLogin);

	api.post("/vendorLogin", vendorLogin);


	api.use((req, res, next) => {
		const token = req.body.token;
		if(token) {
			jwt.verify(token, secretKey, function (err, decoded) {
				if(err) {
					res.status(403).send({ success: false, message: "failed to authenticate"});
				} else {
					req.decoded = decoded;
					next();
				}
			});
		} else {
			res.status(403).send({ success: false, message: "no token generated"});
		}
	});

	api.get('/me', (req, res) => {
		res.json(req.decoded);
	});

	api.post("/vendorPD", vendorPD.Details);

	api.post('/testing', (req, res)=> {
		
		const testing = new Test.OrderTest({
			userId: req.decoded.id,
			drop: "drop here"
		});

		console.log(testing);
		testing.save()
				.then(()=> {
					console.log("saved testing using admin as reference");
					res.send("saved the testing using Admin schema as reference");
				}).catch((err) => {
					console.log("check again");
					res.send("didnt save");
				});
	});

	console.log("in module.exports of api");

	return api;
}