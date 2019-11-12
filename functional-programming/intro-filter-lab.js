// functions are values and can pass function through other functions

var weather = [72, 84, 34, 56, 92, 24, 47, 85, 72, 54];
var goOutside = [];

for (var i = 0; i < weather.length; i++) {
    if (weather[i] > 70) {
        goOutside.push(weather[i]);
    }
}

// console.log(goOutside) // [ 72, 84, 92, 85, 72 ]


var weather = [72, 84, 34, 56, 92, 24, 47, 85, 72, 54];

// This way
var temperature = function(temp) {
    return temp > 70;
}
var goOutside = weather.filter(temperature);

// console.log(goOutside) // [ 72, 84, 92, 85, 72 ]

// OR this way

var goOutside = weather.filter(function(temperature1) { // for temperature1 = it could be anything - define it on the line below
    return temperature1 > 70;
})

// console.log(goOutside) // [ 72, 84, 92, 85, 72 ]

// building our arrays with objects

var forecast = [ 
    {day: 'Monday', sun: true},
    {day: 'Tuesday', sun: false},
    {day: 'Wednesday', sun: false},
    {day: 'Thursday', sun: true},
    {day: 'Friday', sun: false},
    {day: 'Saturday', sun: true},
    {day: 'Sunday', sun: false}
];

var sunnyDays = [];

for (var i = 0; i < forecast.length; i++) {
    if (forecast[i].sun) {
        sunnyDays.push(forecast[i]);
    }
}

// console.log(sunnyDays)
// because it's a boolean, .sun will pass true values only as the function
var sunnyDays = forecast.filter(function(anything) {
    return anything.sun;
})

console.log(sunnyDays)