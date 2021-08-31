let data = ['avocado', 'banana', 'orange', 'apple', 'pear', 'another orange']

function getAll(req, res) {
	console.log('GET /fruits ');
	res.send(JSON.stringify(data))
}

function getOne(req, res) {
	//  /fruits/3
	console.log('GET /fruits/:index');
	let index = req.params.index
	res.send(JSON.stringify( data[index] ))
}

module.exports = { getAll, getOne }
