const VendorOrder = require("../../../models/vendor/vendorOrderProvideSchema");
let number;
let count = 0;
console.log(count);
const increment = (req, res) => {
	let orderId;
	if(req && count<9) {
		number = "0000";
		count++;
		orderId = req+res+number+count;
	}
	else if(req && count<99){
		number = "000"
		count++;
		orderId = req+res+number+count;
	} else if(req && count<999) {
		number = "00"
		count++;
		orderId = req+res+number+count;
	} else if(req && count<9999) {
		number = "0" 
		count++;
		orderId = req+res+number+count;
	} else if(req && count<9999) {
		count++;
		orderId = req+res+number+count;
	}
	else {
		console.log(`exceeded ${count}`);
	}
	return orderId;
};

const orderGenerate = (req, res) => {
	const storeArea = req.body.storeArea;
	const storeName = req.body.storeName;
	
	const value = increment(storeName, storeArea);

	// VendorOrder.OrderVendor.find({
	// 	userId: req.decoded.id
	// }).then((data)=> {
	// 	console.log(data);
	// 	res.json(`${data}`);
	// }).catch((err)=> {
	// 	console.log("check the procedure");
	// });

	// console.log(value);
	res.json(`${value}`);
};

module.exports = {
	orderGenerate
}