// a word that is spelled the same forward and backwards

// str.replace(regexp|substr, newSubStr|function);
var milkAdd = 'Drink more milk';
// var milkAlt = milkAdd.replace('milk', 'silk');

// // console.log(milkAdd) // Drink more milk
// // console.log(milkAlt) // Drink more silk

// var milkSub = milkAdd.replace(/milk/,'soy milk');
// console.log(milkSub) // Drink more soy milk

// create algorithm to measure whether a string is a palindrome 

// function palindrome(strng) {
//     var removeExtra = strng.replace(/\W/)
//     console.log(removeExtra)
//     var reversed = removeExtra.split("").reverse().join()
//     console.log(reversed)
//     if (reversed === removeExtra) {
//         return true
//     }
//     return false
// }

// console.log(palindrome('dad'))


function palindrome(str) {
// take string and remove all non word characters and turn string into lower case assuming that it is case sensitive
str = str.replace(/\W/g, '').toLowerCase();
// put in paranthesis to get a boolean value. split it into an array. reverse the array. join into a string
return (str == str.split('').reverse().join(''));
}

console.log(palindrome('race car')) // true
