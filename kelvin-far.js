// Temperature in Kelvin
var kelvinTemp = 300
// Celsius temp is 273.15 less than Kelvin
var celsiusTemp = kelvinTemp - 273.15
// equation to get farenheit
var fahrenheitTemp = celsiusTemp * (9/5) + 32
// adding Math.floor equation to floor the number which removes the decimals and assigns that the the farenheit temp variable
fahrenheitTemp = Math.floor(fahrenheitTemp)
// Concatanates a string and the farenheit temperature 
console.log('The temperature is ' + (fahrenheitTemp + ' ' + 'degrees fahrenheit.'))
console.log('The temp in Kelvin is ' + kelvinTemp)
celsiusTemp = Math.floor(celsiusTemp)
console.log('The temp in in Celsius is ' + celsiusTemp)