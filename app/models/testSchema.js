console.log("test schema");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const TestDetails = new Schema ({
	username: {
		type: String,
		required: true,
		index: {
			unique: true
		}
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

const Test = mongoose.model("Test", TestDetails);

module.exports = Test;