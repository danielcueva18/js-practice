var alphabet = 'abcdefghijklmnopqrstuvwxyz'
var repeat = 'abc abc abc abc'
var regEx = /abc/i;
// This is to find matches = i is used for capitalization
// .match matches what you are looking for 

var regExAlphabet = alphabet.match(regEx);
var regExRepeat = repeat.match(regEx)
// console.log(regExAlphabet)
// console.log(regExRepeat)


var guess1 = "Mike";
var guess2 = "Daniel";
var guess3 = "Melanie";
var guess4 = "Sabrina";
var guess5 = "DadaWalter";

var regExAnswer = /Mike|Walter|David/i;

// console.log(guess1.match(regExAnswer))
// console.log(guess2.match(regExAnswer))
// console.log(guess3.match(regExAnswer))
// console.log(guess4.match(regExAnswer))
// console.log(guess5.match(regExAnswer))



// console.log(guess3)

// Now we want to search - .search will let us know if it's there by indexing where it starts
// and if it's not there, will through a -1

var trip = 'We should take the car'
var regEx1 = /Car/i;
var regEx2 = /plane/;

var tripCar = trip.search(regEx1);
var tripPlane = trip.search(regEx2);

// console.log(tripCar)
// console.log(tripPlane)

// [] makes any of the characters inside the bracket match any of the characters
// g is to catch all of the matches, not just the first one

var sport1 = 'baseball';
var sport2 = 'football';
var sport3 = 'soccer';

regEx = /[rstlne]/;
// [ 's', index: 2, input: 'baseball', groups: undefined ]

regEx = /[rstlne]/g;
//[ 's', 'e', 'l', 'l' ]

console.log(sport1.match(regEx))
//  's', 'e', 'l', 'l' ]

// ^ or carrot This will match any of the characters that are NOT inside the bracket
regEx = /[^rstlne]/g;
console.log(sport1.match(regEx))
// [ 'b', 'a', 'b', 'a' ]

