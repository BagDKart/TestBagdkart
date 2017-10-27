const testA = (req, res)=> {
	res.json("this is test 1");
};

const testB = (req, res)=> {
	res.json("this is test 2");
};

module.exports = {
	testA,
	testB
};