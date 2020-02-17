// create identical set of code and show how 'var' does not take advantage of block scope but 'let' does

// var lameOh = function() {
//     var myLastName = 'Cueva'
// }

// let lameeeeOh = function() {
//     let myName = 'Daniel';
// }

// var a = 4;
// if (true) {
//     var b = 5
// }
// console.log(a + b) // 9

// var a = 4;
// if (true) {
//     let b = 5
// }

// console.log(a + b) // ReferenceError: b is not defined


function varTest() {
    var x = 1;
    if(true) {
        var x = 2;
        console.log(x)
    }
}

console.log(varTest())

function letTest() {
    let x = 1;
    if(true) {
        let x = 2;
        console.log(x)
    }
    console.log(x)
}

console.log(letTest())

// const for greater stability on a variable

