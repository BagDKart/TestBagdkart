const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testingDetails = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'Admin'
	},
});

const testing = mongoose.model("Testing", testingDetails); 
module.exports = {
	testing
};