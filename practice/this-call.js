var obj = {num: 2};
// regular variable

var addToThis = function(a, b, c) {
    return this.num + a + b + c;
};
// this has no context

console.log(addToThis.call(obj, 1, 2, 3)) // 8
// Now we are adding context to it from obj (this)
// 1, 2, 3 is the arguments we are passing for args a, b, c

var person1 = { firstName: 'John', lastName: 'Doe'};
var person2 = { firstName: 'Jane', lastName: 'Dough'}

function hello(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}
// hello(); undefined undefined undefined - no context we need to call

console.log(hello.call(person1, 'Hola')) // Hola John Doe


