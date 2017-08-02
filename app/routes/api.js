console.log("in api.js");
module.exports = (app, express)=>{
	const api = express.Router();
	
	api.post("/", (req, res)=> {
		res.json({message: "api working perfect"});
	});
	console.log("in module.exports of api");

	return api;
}