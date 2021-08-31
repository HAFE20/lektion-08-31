const express = require('express')
// require och module.exports hör till "commonJS"
// import och export hör till nyare JS, typ ES2015, "modules"
const guestbookGet = require('./guestbook.js')
const fruits = require('./routes/fruits.js')

const app = express()
const PORT = 1337

// Middleware
app.use( express.static(__dirname + '/public') )
app.use( express.json() )


// Routes
// Kommer inte matcha pga express.static
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

app.get('/guestbook', guestbookGet)


// Fruits: REST API
app.use('/fruits', fruits)
// put:     /fruits/:index
// delete:  /fruits/:index



app.listen(PORT, () => {
	console.log('Server is listening on port ' + PORT);
})
