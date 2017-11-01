const express = require('express'),// server middleware
    app = express(),
    mongoose = require('mongoose'),// MongoDB connection library
    bodyParser = require('body-parser'),// parse HTTP requests
    bcrypt = require('bcryptjs'), // middleware to encrypt/decrypt passwords
    cfenv = require('cfenv'),// Cloud Foundry Environment Variables
    appEnv = cfenv.getAppEnv();// Grab environment variables

//     User = require('./server/models/user.model');
    console.log(appEnv);

// /********************************
// Local Environment Variables
//  ********************************/
if(appEnv.isLocal){
    require('dotenv').load();// Loads .env file into environment
}

// /******************************** 
//  MongoDB Connection
//  ********************************/

// //Detects environment and connects to appropriate DB
// if(appEnv.isLocal){
//     mongoose.connect(process.env.LOCAL_MONGODB_URL);
//     sessionDB = process.env.LOCAL_MONGODB_URL;
//     console.log('Your MongoDB is running at ' + process.env.LOCAL_MONGODB_URL);
// }
// // Connect to MongoDB Service on Bluemix
// else if(!appEnv.isLocal) {
//     var mongoDbUrl, mongoDbOptions = {};
//     var mongoDbCredentials = appEnv.services["compose-for-mongodb"][0].credentials;
//     var ca = [new Buffer(mongoDbCredentials.ca_certificate_base64, 'base64')];
//     mongoDbUrl = mongoDbCredentials.uri;
//     mongoDbOptions = {
//       mongos: {
//         ssl: true,
//         sslValidate: true,
//         sslCA: ca,
//         poolSize: 1,
//         reconnectTries: 1
//       }
//     };

//     console.log("Your MongoDB is running at ", mongoDbUrl);
//     mongoose.connect(mongoDbUrl, mongoDbOptions); // connect to our database
//     sessionDB = mongoDbUrl;
// }
// else{
//     console.log('Unable to connect to MongoDB.');
// }




// /********************************
// Express Settings
// ********************************/
// var app = express();
app.enable('trust proxy');
// Use SSL connection provided by Bluemix. No setup required besides redirecting all HTTP requests to HTTPS
if (!appEnv.isLocal) {
    app.use(function (req, res, next) {
        if (req.secure) // returns true is protocol = https
            next();
        else
            res.redirect('https://' + req.headers.host + req.url);
    });
}
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('*', function(req, res){
    res.json("hello i am back");
});

app.listen(appEnv.port, appEnv.bind, function() {
  console.log("Node server running on " + appEnv.url);
});