// // function roadTrip() {
// //     var gallons = 12
// //     var mpg = 34
// //     return gallons * mpg
// // }

// // console.log(roadTrip())


// // // bad practice to making variables global - removing the variables

// // function roadTrip() {
// //     gallons = 12
// //     mpg = 34
// //     return gallons * mpg
// // }

// // console.log(roadTrip())

// // // Good practice for making variables global

// // var gallons = 12
// // var mpg = 34

// // function roadTrip() {
// //     return gallons * mpg
// // }
// // console.log(roadTrip());
// // console.log(gallons)


// // // strict
// // (function() {
// // 'use strict';
// // food = 'pizza';
// // }());

// // // build a nested function
// // // child scope => parent scope => global scope
// // // run the results of the child scope
// // // create a function within a function 
// // // global scope, within that, have a function scope which creates a global scope, within that function, have another function 
// // // which is a nested function
// // // this function to go up one of the scope chain to grab a value from its parent scope and to go up one more time to the global 
// // // and grab a value and then run code that it calls in the inner most function
// // My try lol
// function phones() {
//     var iPhone = 'iPhone'
//     var Android = 'Android'
//         function browser() {
//             var internetExplorer = 'IE'
//             var safari = 'safari'
//                 function version() {
//                     var thirteen = '13'
//                     var fourteen = '20'
//                     return 'My phone is an ' + iPhone + ' ' + 'and the browser is ' + safari + ' ' + 'with verions ' + thirteen
//                 }
//         }
// }

// console.log(phones())

// global scope
var height = 10;

function volume() {
    var width = 10;
    var length = 15;
    var volumeOfObject = function() {
        return length * width * height;
    }
    return volumeOfObject()
}

function myAge() {
    var myAge = 26
    var ageTimesTen = function() {
        return myAge * height
    }
    return ageTimesTen()
}
console.log(myAge())

function fingers() {
    var fiveFingers = 5
    return fiveFingers * height
}
console.log(fingers())
