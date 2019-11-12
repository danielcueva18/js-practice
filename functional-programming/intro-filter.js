var testScores= [92, 87, 54, 63, 75, 59];
var passingTest = function(test) {
    return test > 60;
}

var graduation = testScores.filter(passingTest);
var graduation = testScores.filter(function(test) {
    return test > 60;
})

console.log(graduation) // [92, 87, 63, 75]