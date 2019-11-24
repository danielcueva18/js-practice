// implement an algorithm to determine if a string has all unique characaters

// function unique(string argument) {
//  code block
//        for loop (statement 1, statement 2, statement 3)
//          code block
//              conditional statement (do the first and last index not match?) end algorithm with false return
//                    if loop finishes with no matches return value of true

function uniqueString() {
    var uniqueInput = "Daniel cueva is awesome" 
        for (i = 0; i < uniqueInput.length; i++) {
           if (uniqueInput[i].indexOf() === uniqueInput.lastIndexOf()) {
                return false
           } else {
               return true
           }   
    }   
}

// console.log(uniqueInput.indexOf("s"))
// console.log(uniqueString("n"))

// declare our function and string parameter to be filled with argument


var str1 = "Daniel"

var str1First = str1.indexOf("Daniel")
var str1Second = str1.lastIndexOf("Daniel")

// console.log(str1First)
// console.log(str1Second)



// The indexOf() method returns the position of the first occurrence of a specified value in a string.



// The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.
var str = "Hello planet earth, you are a great planet.";
var n = str.indexOf("planet");

// console.log(n) // 6

var str = "Hello planet earth, you are a great planet.";
var n = str.lastIndexOf("planet");

// console.log(n) // 36

// it will return -1 if the string you specified is nowhere in the main string
// if the string you specified is in the string, it will log the place it's indexed
// so if within the main string, the string you specify shows up twice, depending on the which one you use, it will show you 
// its first or last position


function uniqueString(str) {
    for (var i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) return false;
    }
    return true
}

console.log(uniqueString("car")) // true
console.log(uniqueString("javascript")) // false
console.log(uniqueString("smartphone")) // true
console.log(uniqueString("beer")) // false
console.log(uniqueString("chair")) // true

// var str = "Helo";
// // var n = str.lastIndexOf("planet");
// // console.log(str.indexOf(""))
// // console.log(str.lastIndexOf(""))
// var ye = str.indexOf() !== str.lastIndexOf();
// console.log(ye)





