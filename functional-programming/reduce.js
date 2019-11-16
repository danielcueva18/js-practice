var numbers = [1, 2, 3, 4]

var lol = numbers.reduce(function(acc, curr, indx, arra) {
    return acc + curr;
}, 5);

console.log(lol) // 15


var multArr = [[0, 1], [2,3], [4, 5]];
var lols = multArr.reduce(function(acc, curr, indx, arr) {
    return acc.concat(curr);
}, [-2, -1]);

console.log(lols) // [ -2, -1, 0, 1, 2, 3, 4, 5 ]
