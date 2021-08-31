let data = ['avocado', 'banana', 'orange', 'apple', 'pear', 'another orange']

function getAll(req, res) {
	console.log('GET /fruits ');
	res.send(JSON.stringify(data))
}

function getOne(req, res) {
	//  /fruits/3
	console.log('GET /fruits/:index');
	let index = req.params.index
	if( index >= 0 && index < data.length ) {
		res.send(JSON.stringify( data[index] ))
	} else {
		// ej tillåtet request
		res.sendStatus(400)
		// (man kan skilja på error 400 och 404)
	}
}

function post (req, res) {
	console.log('POST /fruits ', req.body);
	// TODO: felhantering, kontrollera att req.body är ett rimligt objekt
	let fruit = req.body.fruit
	data.push(fruit)
	res.sendStatus(200)
}

module.exports = { getAll, getOne, post }
