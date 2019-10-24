/// .pop deletes the last argument in the array
/// .push adds a new argument in the array
/// .shift removes the first argument inside the array
/// .unshift adds an argument to the beginning of the array
/// testScores [1, 3, 3]
/// testScores.pop()
/// it is a method when it has the ()

var shoppingList = ['apples', 'pizza', 'chicken', 'mushrooms', 'oranges', 'beef'];
//insert crackers at the front of the array and 'grapes' at the end of the array

shoppingList.unshift('crackers')
shoppingList.push('grapes')

console.log(shoppingList)
console.log(shoppingList.length)

// remove an item from the front and the end of the shopping array
shoppingList.shift()
console.log(shoppingList)

shoppingList.pop()
console.log(shoppingList)