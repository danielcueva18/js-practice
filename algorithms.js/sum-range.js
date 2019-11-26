// Math.max() - gives you the highest number
// Math.min() - gives you the lowest number

// Find the sum of all numbers in a range of two numbers in an array
// Largest number may be given first 

// function sumRange (x, y) {
//     var max = Math.max(x, y)
//         console.log(max)
//     var min = Math.min(x, y)
//         console.log(min)
//     var total = 0
// }

function range(start, end) {
    var ans = [];
    var max = Math.max(start, end)
    var min = Math.min(start, end)
    var total = 0
    for (var i = min; i <= max; i++) {
        if(ans.push(i) + total) {
            total = ans.push(i)
        }
    }
    return total;
}

// console.log(range(8, 1))

// 46

function addAll (array) {
// use Math.max to look at the index of both element and return the largest
    var max = Math.max(array[0], array[1]);
    var min = Math.min(array[0], array[1]);
    var total = 0
    for (var i = min; i <= max; i++) {
    // add current value in the for loop to total value
        console.log(total)
        console.log(i)
        total += i;
    }
    return total
}

console.log(addAll([1, 8]))
// 0 = first total variable
// 1 = i
// 1 = first total
// 2 = i
// 3 = second total
// 3 = i
// 6 = third total
// 4 = i
// 10  = total
// 5 = i
// 15 = total
// 6 = i
// 21 = total
// 7 = i
// 28 = total
// 8 = i <= max; i is the variable that goes one by one and until it hits max which is 8, we stop
// 36 = grand because we hit i <= max 
