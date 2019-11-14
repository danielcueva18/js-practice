// map transform each element into a new array

// implement the map methods 2 times
//1. create an array with numbers
//2. use the map method twice
// method chaining calling methods multiple times
// double the array - like we tripled it
// then chain the method map directly to that and add 1 to each number in that array

var numbers = [3, 5, 7, 9, 0];

// this will work but too much code
var double = numbers.map(function(times2) {
    return times2 * 2
})

var oneMore = double.map(function(plus1) {
    return plus1 + 1
})

// console.log(double) // [ 6, 10, 14, 18, 0 ]
// console.log(oneMore) // [ 7, 11, 15, 19, 1 ]


// this conbines the method into two pieces giving you a different output for the initial variable
var double = numbers.map(function(times2) { // [ 6, 10, 14, 18, 0 ]
    return times2 * 2
}).map(function(times2) {
    return times2 + 1
 })

// console.log(double) // [ 7, 11, 15, 19, 1 ]


// array of greetings hi hello hey thanks
// array name shout - make them uppercase
// get rid of the first element and save it to a new var shouthit

var greetings = ['hi', 'hello', 'hey', 'thanks']

var shout = greetings.map(function(uppercasey) {
    return uppercasey.toUpperCase()
})

console.log(shout) // [ 'HI', 'HELLO', 'HEY', 'THANKS' ]

var shoutHi = shout.shift();

console.log(shoutHi) // HI