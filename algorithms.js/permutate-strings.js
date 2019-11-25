// create an algorithm to determine if two strings are a permutation of each other
// .join - puts a split array back into a string
// .sort - sorts alphabetical order
// . split - separates the string into individual arrays
// 

// function isPermutation(parm1, parm2) {
//     var combine = parm1 + parm2
//     console.log(combine.split('').join())
// };



function isPermutation(a, b) {
    var a1 = a.split("").sort().join()
    var b1 = b.split("").sort().join()
    console.log(a1)
    console.log(b1)
    if (a.length !== b.length) {
        return false;
    }
    return a.split("").sort().join() === b.split("").sort().join();
}

console.log(isPermutation("danieil", "danieli"))
// a,d,e,i,i,l,n
// a,d,e,i,i,l,n
// true

// breaking it down
var practice = "daniel"
var arrPractice = practice.split('')
console.log(arrPractice) // [ 'd', 'a', 'n', 'i', 'e', 'l' ] - this separates the string by each character
var sorPractice = arrPractice.sort()
console.log(sorPractice) // [ 'a', 'd', 'e', 'i', 'l', 'n' ] - this sorts each character in alphabatical order
var joinPractice = sorPractice.join()
console.log(joinPractice) // a,d,e,i,l,n - this makes the now sorted array back into a string which is used to compare
