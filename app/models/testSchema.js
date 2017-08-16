console.log("test schema");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const TestDetails = new Schema ({
	test: {
		type: String,
		ref: 'AdminSchema'
	},
	password: {
		type: String
	}
});

TestDetails.pre("save", function(next) {
	let adSave = this;
    	bcrypt.hash(adSave.password, 10).then((hash) => {
	        adSave.password = hash; //if there is no error we are going to hash
	        next();
	    }).catch((err) => {
	    	console.log("password not hashed :"+err);
	    });
});	

const TestValue = mongoose.model("TestValue", TestDetails);

module.exports = TestValue;