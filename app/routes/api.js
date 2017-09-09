console.log("in api.js");

const jwt = require("jsonwebtoken");

const config = require("../../config");
const secretKey = config.secretKey;

const Test = require("../models/testSchema");
const Admin = require("../models/admin/adminSchema");
const TestingValue = require("../models/testingSchema");
const VendorOrder = require("../models/vendor/vendorOrderProvideSchema");
const Vendor = require("../models/vendor/vendorSchema");

const createVendor = require("../handlers/vendor/createVendor.js");
const createAdmin = require("../handlers/admin/createAdmin.js");
const createDriver = require("../handlers/driver/createDriver.js");
const adminLogin = require("../handlers/admin/loginAdmin.js");
const vendorLogin = require("../handlers/vendor/loginVendor.js");
const vendorPD = require("../handlers/vendor/req_for_pickup/pick&drop_addr");
const testApi = require("../handlers/vendor/testapi");
const orderGenerateVendor = require("../handlers/vendor/req_for_pickup/OrderGenerate");
const vendorProfile = require("../handlers/vendor/profile/vendorProfile");
const vendorCancelOrder = require("../handlers/vendor/cancelOrder");
const vendorOrderHistory = require("../handlers/vendor/orderHistory");
const vendorOrderDetails = require("../handlers/vendor/orderDetails");

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

	// api.post("/globalTest", (req, res)=> {
	// 	console.log(global);
	// 	res.json("check the console");
	// });
	
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

	api.post('/test', testApi.trial);

	api.post("/vendorPD", vendorPD.Details);
	api.post("/vendorPdetails", vendorPD.showDetails);
	api.post("/vendorPappend", vendorPD.appendDetails);
	api.post("/vendorCancelOrder", vendorCancelOrder.cancelOrder);
	api.post("/vendorOrderHistory", vendorOrderHistory.orderHistory);
	api.post("/orderGenerate", orderGenerateVendor.orderGenerate);
	api.post("/vendorOrderDetails", vendorOrderDetails.orderDetailEach);

	// api.post('/testing', (req, res)=> {
	// });

	api.post("/vendorProfile", vendorProfile.profileView);

	console.log("in module.exports of api");

	return api;
}