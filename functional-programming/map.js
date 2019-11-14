var forecast = [
    {day: 'Monday', sun: true, humidity: 10},
    {day: 'Tuesday', sun: false, humidity: 100},
    {day: 'Wednesday', sun: false, humidity: 100},
    {day: 'Thursday', sun: true, humidity: 25},
    {day: 'Friday', sun: false, humidity: 100},
    {day: 'Saturday', sun: true, humidity: 15},
    {day: 'Sunday', sun: false, humidity: 100}
];

var humid = forecast.map(function(wetness) {
    return wetness.day
});

// console.log(humid)

// . filter gives us this when running wetness.day (.day could be any of the properties)
// [ { day: 'Monday', sun: true, humidity: 10 },
//   { day: 'Tuesday', sun: false, humidity: 100 },
//   { day: 'Wednesday', sun: false, humidity: 100 },
//   { day: 'Thursday', sun: true, humidity: 25 },
//   { day: 'Friday', sun: false, humidity: 100 },
//   { day: 'Saturday', sun: true, humidity: 15 },
//   { day: 'Sunday', sun: false, humidity: 100 } ]

// .map gives us the array for the specific one (example .day)
// [ 'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
//   'Sunday' ]

var numbers = [5, 6, 9, 0, 2, 4]
var triples = numbers.map(function(lol) {
    return lol * 3
})
console.log(triples)
