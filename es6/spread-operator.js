let bet = ['d', 'e', 'f'];
let alphabet = ['a', 'b', 'c',...bet];

console.log(alphabet) // [ 'a', 'b', 'c', 'd', 'e', 'f' ]






let first = [1, 2, 3];
let second = [2, 4, 6];
function productOfThree(a, b, c) {
    let result = a * b * c;
    console.log(result);
}

console.log(productOfThree(...first)); //6
console.log(productOfThree(...second)); //48

