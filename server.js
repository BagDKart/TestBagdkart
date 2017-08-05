const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config");
const mongo = require("mongodb").MongoClient;
const api = require("./app/routes/api.js")(app, express);

mongoose.Promise = global.Promise;

mongoose.connect(config.database)
		.then((data)=> {
			console.log("connected to mongoose");
		}).catch((err)=> {
			console.log("err in connecting to mongoose")
		});

mongo.connect(config.database)
	.then((data)=> {
		console.log("the database is "+data);
}).catch((err) => {
	console.log("there is a error");
});

app.use("/api", api);

app.get("*", (req, res)=> {
	res.sendFile(__dirname+'/index.html');
});

app.listen(config.port, function(err) {
	if(err) {
		console.log("error in listening");
	} else {
		console.log("listening to port 3030");
	}
});