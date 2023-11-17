const btnSearch = document.querySelector('#search-btn')
const inputCountry = document.querySelector('#country')
const result = document.querySelector('#result')

btnSearch.addEventListener('click', () => {
	const nameCountry = inputCountry.value
	const url = `https://restcountries.com/v3.1/name/${nameCountry}?fullText=true`
	console.log(url)
	fetch(url)
		.then(res => res.json())
		.then((data) => {
			result.innerHTML = `
			<img src="${data[0].flags.svg}" class="flag-img">
			<h2>${data[0].name.common}</h2>
			<div class="wrapper">
				<div class="data-wrapper">
					<h4>Capital:</h4>
					<span>${data[0].capital[0]}</span>
				</div>
			</div>
			<div class="wrapper">
				<div class="data-wrapper">
					<h4>Continent:</h4>
					<span>${data[0].continents[0]}</span>
				</div>
			</div>
			<div class="wrapper">
				<div class="data-wrapper">
					<h4>Population:</h4>
					<span>${data[0].population}</span>
				</div>
			</div>
			<div class="wrapper">
				<div class="data-wrapper">
					<h4>Currency:</h4>
					<span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
				</div>
			</div>
			<div class="wrapper">
				<div class="data-wrapper">
					<h4>Languages:</h4>
					<span>
					${Object.values(data[0].languages)
                		.toString()
                		.split(',')
                		.join(', ')}
					</span>
				</div>
			</div>
`
		})
})
// capital[0]
// flags.svg
// name.common
// continents[0]
// currencies[0]
// languages[0]

