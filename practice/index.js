console.log('Hello World')
let daniel = "Mi nombre"
console.log(daniel);

let exGirlfriend1 = 'Lena'
let exGirlfriend2 = 'Val'
let exGirlfriend3 = 'Sabrina'

console.log('My last gf name was') 
console.log(exGirlfriend1);

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

let age = 26;
let name = "Daniel";
let lovesFemale = true;
let middleName = undefined;
let skinColor = null;

console.log(age, name, lovesFemale, middleName, skinColor)

let person = {
    age: 27,
    name: "Cheny",
    middleName: "Israel",
};

person.middleName = "David"
person['middleName'] = "Walter";
console.log(person.middleName);

let selectedColors = ['red', 'yellow', 'blue'];
console.log(selectedColors[2])

function hola (firstName, lastName){
    console.log('Hi my name is ' + firstName + ' ' + lastName);
}

hola('Daniel', 'Cueva')

function square(number) {
    return number + number;
}
let numero = square(2)
    console.log(numero);
