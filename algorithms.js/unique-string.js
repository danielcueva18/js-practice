// implement an algorithm to determine if a string has all unique characaters

// function unique(string argument) {
//  code block
//        for loop (statement 1, statement 2, statement 3)
//          code block
//              conditional statement (do the first and last index not match?) end algorithm with false return
//                    if loop finishes with no matches return value of true

// function uniqueString() {
//     var uniqueInput = "Daniel cueva is awesome" 
//         for (i = 0; i < uniqueInput.length; i++) {
//            if (uniqueInput[i].indexOf() === uniqueInput.lastIndexOf()) {
//                 return false
//            } else {
//                return true
//            }   
//     }   
// }

// // console.log(uniqueInput.indexOf("s"))
// console.log(uniqueString("n"))

// declare our function and string parameter to be filled with argument
function uniqueString(stringer) {
    // run for loop to iterate through our string character by character
    for (var i = 0; i < stringer.length; i++) {
        // check to see if the first and last instances of characters are the same
        // if not true that they are equal return false
        if (stringer.indexOf(stringer[i]) !== stringer.lastIndexOf(stringer[i])) return false;
    }
    // if we make it through the loop without returning a value of false
    return true
}

console.log(uniqueString("abc a"))
