console.log("in api.js");
const CreateVendor = require("../handlers/createVendor");
const CreateAdmin = require("../handlers/createAdmin");
const CreateDriver = require("../handlers/createDriver");

module.exports = (app, express)=>{
	const api = express.Router();
	
	api.post("/", (req, res)=> {
		res.json({message: "api working perfect"});
	});

	api.post("/createVendor", CreateVendor);

	api.post("/createAdmin", CreateAdmin);

	api.post("/createDriver", CreateDriver);

	console.log("in module.exports of api");

	return api;
}