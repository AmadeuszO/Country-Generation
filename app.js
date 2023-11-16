const btnSearch = document.querySelector('#search-btn')
const inputCountry = document.querySelector('#country')

btnSearch.addEventListener('click', () => {
	// const nameCountry = inputCountry.value
	const nameCountry = 'India'
	const url = `https://restcountries.com/v3.1/name/${nameCountry}?fullText=true`
	console.log(url)
	fetch(url)
		.then(res => res.json())
		.then(data => {
			console.log(data[0])
			console.log(data[0].capital[0])
			console.log(data[0].flags.svg)
			console.log(data[0].name.common)
			console.log(data[0].continents[0])
			console.log(Object.keys(data[0].currencies)[0])
			console.log(data[0].currencies[Object.keys(data[0].currencies)].name)
			console.log(Object.value(data[0].languages).toString().split(',').join(', '))
		})
})
