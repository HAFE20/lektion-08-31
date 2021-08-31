let button = document.querySelector('#guest-button')

button.addEventListener('click', async () => {
	console.log('Guest button click');
	// URL: http://localhost:1337/guestbook
	// Alternativ: XMLHttpRequest, fetch, axios, $.ajax
	const response = await fetch('/guestbook')
	const text = await response.text()
	console.log('Response from server: ' + text);

	let p = document.querySelector('#guest-message')
	p.innerText = text
})
