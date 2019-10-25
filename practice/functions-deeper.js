// functions expressions
// anonymous expressions
// IIFEs

// 1. Functions expressions
function knockKnock() {
    return 'Who\'s there?';
}

// call the knockknock function

console.log(knockKnock())

// 2. turn knockKnock into an anonymous functions within a function expressions
// call the function

var knockKnock = function() {
    return 'Who\'s there?';
}

console.log(knockKnock);
console.log(knockKnock());


// 3. IFFE - immediately invoked function expressions)

function dogWalker(person, dog) {
    return person  + ' is taking ' + dog  + ' for a walk';
}

console.log(dogWalker('Daniel', 'corgi'));

// Create an IIFE
// Create an IIFE within a variable and call it

var doggyWalker = (function(person, dog) {
    return person  + ' is taking ' + dog  + ' for a walk';
}('Ebony', 'Chihuahua'))

console.log(doggyWalker)





