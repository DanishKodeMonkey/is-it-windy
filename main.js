/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUZBQXFGLE1BQU07QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pcy1pdC13aW5keS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKCkge1xuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG5cdFx0XHQnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT02MzlhY2FkNjRlNjI0Nzk4ODQ3MTM1MjU1MjQwNzAzJnE9YXV0bzppcCdcblx0XHQpXG5cblx0XHRjb25zdCB3ZWF0aGVyT2JqID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cdFx0cmV0dXJuIHByb2Nlc3NXZWF0aGVyRGF0YSh3ZWF0aGVyT2JqKVxuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRjb25zb2xlLmxvZyhlcnIpXG5cdH1cbn1cblxuZnVuY3Rpb24gcHJvY2Vzc1dlYXRoZXJEYXRhKHdlYXRoZXJPYmopIHtcblx0Y29uc3QgcHJvY2Vzc2VkV2VhdGhlckRhdGEgPSBbXVxuXHRjb25zdCB3aW5kX2twaCA9IHdlYXRoZXJPYmouY3VycmVudC53aW5kX2twaFxuXHRjb25zdCB3aW5kX2RpciA9IHdlYXRoZXJPYmouY3VycmVudC53aW5kX2RpclxuXHRjb25zdCB3aW5kX2d1c3QgPSB3ZWF0aGVyT2JqLmN1cnJlbnQuZ3VzdF9rcGhcblx0cHJvY2Vzc2VkV2VhdGhlckRhdGEucHVzaCh3aW5kX2twaCwgd2luZF9kaXIsIHdpbmRfZ3VzdClcblx0cmV0dXJuIHByb2Nlc3NlZFdlYXRoZXJEYXRhXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEdpZihxdWVyeSkge1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuXHRcdGBodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy9zZWFyY2g/YXBpX2tleT10RmtJNThNYkZKTXBYUXJUbkxydWVRekNhbHhvVDk4biZxPSR7cXVlcnl9JmxpbWl0PTFgXG5cdClcblx0Y29uc3QgZ2lmT2JqID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cdGNvbnN0IGdpZlVybCA9IGdpZk9iai5kYXRhWzBdLmltYWdlcy5vcmlnaW5hbC51cmxcblx0Y29uc3QgZ2lmRGlzcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5cdGdpZkRpc3Auc3JjID0gZ2lmVXJsXG5cblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnaWZEaXNwKVxufVxuXG5hc3luYyBmdW5jdGlvbiBkZXRlcm1pbmVSdW5uaW5nQ29uZGl0aW9ucygpIHtcblx0Y29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKClcblx0aWYgKHdlYXRoZXJEYXRhWzJdID4gNDApIHtcblx0XHRjb25zb2xlLmxvZygnVE9PIFdJTkQhIDooJylcblx0XHRnZXRHaWYoJ3N0b3JteSBmdW5ueScpXG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5sb2coJ2d1ZCB3aW5kIDopJylcblx0XHRnZXRHaWYoJ2ZvcmVzdCBndW1wIHJ1bicpXG5cdH1cbn1cblxuZGV0ZXJtaW5lUnVubmluZ0NvbmRpdGlvbnMoKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9