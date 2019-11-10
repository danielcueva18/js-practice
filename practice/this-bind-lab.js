// this needs to know what you're referring to

let person1 = {
    name: 'Alex',
    lastName: 'Perelman'
};

let person3 = {
    lastName: 'Cueva'
};

let person2 = {
    name: 'Alexis'
};

function namer() {
    return this.name
}

function lastNamer() {
    return this.lastName
}

// console.log(namer)

// return the name Alex and Alexis
// this allows you to not be restricted to calling just one function at a time
// this. calls out the property from inside whatever function you want and bind. lets you go inside any function to find that property

// console.log(namer.bind(person1)());
// // console.log(namer.bind(person2)())
// console.log(lastNamer.bind(person3)())

let number = {
    x: 24,
    y: 25
}

let count = function() {
    console.log(this.x + this.y);
}

let countNumber = count.bind(number)();
// console.log(count.bind(number)())