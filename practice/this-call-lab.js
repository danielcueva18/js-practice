// calls a function with a given "this" value and arguments provided individually
// call individual arguments
// apply array arguements
// C(all) - arguments separated by commas
// A(apply) - argument of an array
// Syntax
// function.call(thisContextObject, arg1, arg2, ..)

var myLanguages = function(lang1, lang2, lang3) {
    console.log('My name is ' + this.name + ' and I know ' + lang1 + ", " + lang2 + ", " + lang3)
};

// create 2 people objects with a name property and value
// use the call method on our function
// pass person object as the first argument followed by arguments for lang1, lang2, lang3
// property = name, value = "Daniel"
var people1 = {name: 'Daniel'}
// console.log(myLanguages.call(people1, 'english', 'spanish', 'german')) // My name is Daniel and I know english, spanish, german

var people2 = {name: 'Ali'}
var languages = ['english', 'spanish', 'german'];
console.log(myLanguages.call(people2, languages[0], languages[1], languages[2])); // My name is Ali and I know english, spanish, german
// calling the arguments through arrays



