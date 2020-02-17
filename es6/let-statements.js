// LET STATEMENT
// the let statement allows for block scope to declare a local variable. This differs from the var keyword, which declares
// a variable globally or locally to the scope of a function

let topping1 = 'pepperoni'
let topping2 = 'mushrooms'

let pizzaToppings = `My favorite pizza is ${topping1} & ${topping2}!`

console.log(pizzaToppings)

var pizza = {
    topping1: 'pepperoni',
    topping2: 'mushrooms',
    favoritePizza: function() {
        return `My favorite pizza is ${topping1} & ${topping2}!`
    }
}

console.log(pizza.favoritePizza()) // My favorite pizza is pepperoni & mushrooms!

