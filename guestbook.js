let antal = 0

const guestbookGet = (req, res) => {
	console.log('Guestbook');
	antal++
	res.send('Du är besökare nr ' + antal + '.');
}

module.exports = guestbookGet
