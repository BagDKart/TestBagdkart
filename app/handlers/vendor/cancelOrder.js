const cancelOrder = (req, res) => {
	res.json({message: "cancelling the order"});
};

module.exports = {
	cancelOrder
};