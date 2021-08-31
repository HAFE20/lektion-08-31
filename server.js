const express = require('express')
// require hör till "commonJS"
// import hör till nyare JS, typ ES2015, "modules"

const app = express()
const PORT = 1337

app.get('/', (req, res) => {
	// console.log('GET / fungerar');
	// 200 är standardkoden när vi skickar ett svar
	res.status(200).sendFile(__dirname + '/frontend/index.html')
})

app.get('/unicorn.css', (req, res) => {
	// res.send('One moment, fetching unicorn...')
	res.status(200).sendFile(__dirname + '/frontend/unicorn.css')
})
app.get('/finns-inte.css', (req, res) => {
	// res.sendStatus(404)
	res.status(404).send('This resource has moved')
})

app.listen(PORT, () => {
	console.log('Server is listening on port ' + PORT);
})
