let names = ['Tim', 'Daniel', 'Cheny'];


console.log(names) // [ 'Tim', 'Daniel', 'Cheny' ]
console.log(...names) // Tim Daniel Cheny

let fruits = ['apple', 'banana', 'cherry'];
let girls = ['Siris', ' Niki', ' Micaela'];

let combo = [fruits, ...girls]
console.log(combo)


let modelsBe4 = ['oo', 'kia', 'chevy']
function cars(a, b, c){
    let allmodelsBe = a + b + c;
    console.log(allmodelsBe);
}

console.log(cars(...modelsBe4)); // teslakiachevy


let modelsBeNum = [1, 2, 3]
function cars(a, b, c){
    let allmodelsBe = a + b + c;
    console.log(allmodelsBe);
}

console.log(cars(...modelsBeNum)); // teslakiachevy


let modelsBeU = ['d', 'kia', 'chevy']
function cars(a, b, c){
    return `I have a ${a} not a ${b} or a ${c}.`
}

console.log(cars(...modelsBeU));



