// create an array of 5 numbers
// find the sum of all numbers - reduce
// find what all the numbers equal when you multiply them - reduce
// return the largest number in an array - reduce if else logic

var numbers = [5, 10, 145, 20, 25]

var sumNumbers = numbers.reduce(function(acc, curr) {
    return acc + curr
});

// console.log(sumNumbers) // 15

var multNumbers = numbers.reduce(function(acc, curr) {
    return acc * curr
});

// console.log(multNumbers) // 120

var highNumber = numbers.reduce(function(acc, curr) {
    return Math.max(acc, curr)
})
// console.log(highNumber) // 5

// use map method on all elements of an array
// use reduce method to return single value of new array

var challenge = [1, 3, 5, 7, 9]

var mappy = challenge.map(function(lol) {
    return lol + 3;
})
console.log(mappy) // [ 4, 6, 8, 10, 12 ]

var rejuice = mappy.reduce(function(acc, curr) {
    return curr + acc
})

// console.log(rejuice)

// instead of new variable rejuice, you can add it to the mappy var

var mappy = challenge.map(function(lol) {
    return lol + 3;
}).reduce(function(acc, curr){
    return curr + acc;
})

console.log(mappy) // 40


