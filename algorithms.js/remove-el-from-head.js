// .splice = array.splice(start, delete, additional elements)

// start = where you want the additonal item to show up
// delete = which item do you want to remove from the array
// additional elements = where do you want to add this array at

var names = ['John', 'Sarah', 'David', 'Daniel', 'Gian']
// var splicers = names.splice(2, 0, 'linda')
// console.log(splice) // [ 'David' ] - removes value index 2
// console.log(names)
// (1, 0) first number targets the value on that index and second number removes the values starting there
var splicers = names.splice(2, 2) // starts at David since it is index 2 and deletes 2 values starting at the target 'David' which is David and Daniel
// console.log(splicers)// [ 'David', 'Daniel' ] - will show you which ones were removed
// console.log(names)// [ 'John', 'Sarah', 'Gian' ] - will show you the remaining values after the splice


// remove elements from head
// pseudocode
// function(array, n elements to remove)
    // apply splice method to array. Pass it the arguments of starting point and n argument


function removeEls (array) {
    var head = ['John', 'Sarah', 'David', 'Daniel', 'Gian']
    return head.splice(0, array)
} 

// console.log(removeEls(2, 0)) // [ 'John', 'Sarah' ]


// Answer
// declare function and pass parameters of array and elements to remove function chopper[arr, excess]
function chopper(arr, excess) {
    // apply splice method to array and pass arguments of where to remove and how many elements to remove
    arr.splice(0, excess);
    return arr
}
console.log(chopper(['asdf', 'asdfasdf', 'Jan', 'Feb', 'Mar', 'Apr', 'March', 'Jun', 'Jul', 'Aug']))
// [ 'asdf',
//   'asdfasdf',
//   'Jan',
//   'Feb',
//   'Mar',
//   'Apr',
//   'March',
//   'Jun',
//   'Jul',
//   'Aug' ]

console.log(chopper(['asdf', 'asdfasdf', 'Jan', 'Feb', 'Mar', 'Apr', 'March', 'Jun', 'Jul', 'Aug'], 2))
// 2 here acts as excess or the amounts to remove - since our target is 0, it will delete the first 2 values starting at our target
//[ 'Jan', 'Feb', 'Mar', 'Apr', 'March', 'Jun', 'Jul', 'Aug' ]
