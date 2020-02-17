// create multiline string ES5 & ES6

var yolo = 'I live the yolo\nlife style'
// console.log(yolo)
// I live the yolo
// life style

let yolo2 = `I live the 
yolo lifestyle`
// console.log(yolo2)
// I live the 
// yolo lifestyle

var drink = 'coffee'
var food = 'doughnut'
var time = 'morning'

var morningHabit = 'I drink ' + drink + ' and eat a ' + food + ' in the ' + time + '!'
// console.log(morningHabit) // I drink coffee and eat a doughnut in the morning!

let morningHabit2 = `I drink ${drink} and eat a ${food} in the ${time}!`
// console.log(morningHabit2) // I drink coffee and eat a doughnut in the morning!