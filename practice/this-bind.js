let cat = {};

cat = {
    sound: 'meow',
    speak: function() { 
        console.log(this.sound);
    }
};



// console.log(cat.speak());
function lol() {
    speaks: this.speak
};

let lolBind = lol.bind(cat)


// let lol = cat.speak();
// let lolBind = lol.bind(cat)


// console.log(cat.sound) // meow
// console.log(cat.speak) // [Function: speak]

// let speakFunction = cat.speak();

// bind creates a function that allows you to enter another function so you can use its properties 
// it will look inside bind(cat) - cat function for context
// let speakFunctionBind = speakFunction.bind(cat());
// console.log(speakFunctionBind)

