// rewrite both functions including a parameter and argument for name in both
// in the second function replace 'everything' with a parameter and argument naming a task


function goodMorningNeighbor(firstname) {
    return 'Good morning, ' + firstname  +'!';
}

function goodEveningNeighbor(firstname, task) {
    return 'Good evening, ' + firstname + ', thanks for ' + task + '!';
}

console.log(goodMorningNeighbor('David'));
console.log(goodEveningNeighbor('Anthony', 'being clean'))



