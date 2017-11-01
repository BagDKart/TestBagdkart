const express = require("express"),
	app = express(),
	mongoose = require("mongoose"),
	mongo = require("mongodb").MongoClient,
	bodyParser = require("body-parser"),
	morgan = require("morgan"),
	api = require("./app/routes/api.js")(app, express),
	cfenv = require("cfenv"),
	appEnv = cfenv.getAppEnv(),
	config = require("./config.js"),
	port = config.port;

console.log(appEnv);



// mongoose.Promise = global.Promise;

// mongoose.connect(config.database, {
// 	useMongoClient: true,
// }).then((data)=> {
// 	console.log("connected to mongoose");
// }).catch((err)=> {
// 	console.log("err in connecting to mongoose")
// });

// mongo.connect(config.database)
// 	.then(()=> {
// 		console.log(`the database is ${config.database}`);
// }).catch((err) => {
// 	console.log("there is a error");
// });


// app.use(bodyParser.urlencoded({
// 	extended: true
// }));

// app.use(bodyParser.json());

// app.use(morgan('dev'));

// app.use("/api", api);

app.get('*', function(req, res){
    res.send("hello bagdkart backend");
});



app.listen(appEnv.port, function(err) {
	if(err) {
		console.log("error in listening");
	} else {
		console.log(`listening to port ${appEnv.port}`);
	}
});

