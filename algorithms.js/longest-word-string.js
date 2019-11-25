// algorithm that finds the longest word in the string
// for loop, if statement, string.split

var strng = "Hi my name is Daniel"
var i = strng.length

// console.log(Math.max(i))

// console.log(i)

// console.log(strng.split(" "))



// function longestString(str) {
//     var longest;
//     for (var i = 0; i < str.length; i++) {
//         if (str.split(str[i]) > i)
//     }
// }

function findLongestWord(str) 
    { str = str.split(' '); // this splits up each other into its own array - the intention is to always show this amount of arrays
    var longest = 0
    for(var i = 0; i < str.length; i++) {
        console.log(str) // [ 'a', 'asd', 'as', 'asdff', 'as' ]
        if(str[i].length > longest) { // we want to transform this 0 into a new value which is the updated str[i].length
        longest = str[i].length
            console.log(longest) // 1, 3, 5 - there are two more arrays but they are not greater than 5
    } 
    } return longest; // due to our operator, it will only show the last value that made it which is the higher number
} 
console.log(findLongestWord("a asd as asdff as"));
// [ 'a', 'asd', 'as', 'asdff', 'as' ] 1
// [ 'a', 'asd', 'as', 'asdff', 'as' ] 3
// [ 'a', 'asd', 'as', 'asdff', 'as' ]
// [ 'a', 'asd', 'as', 'asdff', 'as' ] 5
// [ 'a', 'asd', 'as', 'asdff', 'as' ]


