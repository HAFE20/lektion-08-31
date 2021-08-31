const express = require('express')
// require hör till "commonJS"
// import hör till nyare JS, typ ES2015, "modules"

const app = express()
const PORT = 1337

app.get('/', (req, res) => {
	// console.log('GET / fungerar');
	// res.send('GET / fungerar!!')
	res.sendFile(__dirname + '/frontend/index.html')
})

app.get('/unicorn.css', (req, res) => {
	// res.send('One moment, fetching unicorn...')
	res.sendFile(__dirname + '/frontend/unicorn.css')
})

app.listen(PORT, () => {
	console.log('Server is listening on port ' + PORT);
})
