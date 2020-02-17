
var es5Func = function() { return 2;}
let es6Func = () => 2

let cubed;

cubed = x => x * x * x; //concise body, implicit return
cubed = x => { return x * x * x;}; //block body needs, needs implicit return statement
