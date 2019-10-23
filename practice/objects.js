var humanBeing = {
    name: 'Daniel',
    arms: 2,
    male: true,  
};

console.log(humanBeing)


var pizza = {}
//object.property = value
pizza.topping = 'pepperoni',
pizza.yummy = true,
pizza.slices = 6,
pizza.crust = 'thin'

console.log(pizza)

var cup = {}
    cup['color'] = 'brown',
    cup['tall'] = true,
    cup['how many'] = 3,

console.log(cup)

var snowman = {
    isSnow: true,
    color: 'color',
    madeOfSnowballs: 3,
    'first name': 'frosty',
}

console.log(snowman.isSnow, snowman.color, snowman.madeOfSnowballs, snowman['first name'])

snowman.isSnow = false
console.log(snowman.isSnow)

var house = {
}
house.color = 'brown',
house.isBig = true,
house.howManyDoors = 4,
house['has a name'] = 'Sweet Home',
house['has an owner?'] = 'yes it does'

console.log("My house's name is " + house['has a name'])