async function getWeather() {
	try {
		const response = await fetch(
			'https://api.weatherapi.com/v1/current.json?key=639acad64e624798847135255240703&q=auto:ip'
		)

		const weatherObj = await response.json()
		return processWeatherData(weatherObj)
	} catch (err) {
		console.log(err)
	}
}

function processWeatherData(weatherObj) {
	const processedWeatherData = []
	const wind_kph = weatherObj.current.wind_kph
	const wind_dir = weatherObj.current.wind_dir
	const wind_gust = weatherObj.current.gust_kph
	processedWeatherData.push(wind_kph, wind_dir, wind_gust)
	return processedWeatherData
}

async function getGif(query) {
	const response = await fetch(
		`https://api.giphy.com/v1/gifs/search?api_key=tFkI58MbFJMpXQrTnLrueQzCalxoT98n&q=${query}&limit=1`
	)
	const gifObj = await response.json()
	const gifUrl = gifObj.data[0].images.original.url
	const gifDisp = document.createElement('img')
	gifDisp.src = gifUrl

	document.body.appendChild(gifDisp)
}

async function determineRunningConditions() {
	const weatherData = await getWeather()
	if (weatherData[2] > 40) {
		console.log('TOO WIND! :(')
		getGif('stormy funny')
	} else {
		console.log('gud wind :)')
		getGif('forest gump run')
	}
}

determineRunningConditions()
