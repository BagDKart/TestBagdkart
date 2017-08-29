const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TestingDetails = new Schema({
	testValue: {
		type: String
	},
	testId: {
		type: String,
		ref: 'OrderTest'
	}
});

const Testing = mongoose.model("Testing", TestingDetails); 
module.exports = {
	Testing
};