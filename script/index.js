const form = document.getElementById('form__subscribe')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    const input = document.querySelector('[name="subscribe_email"]')

	console.log(input)
	console.log(input.value)
})