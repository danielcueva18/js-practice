// Challenge: The program will determine the actual and ideal calories you consumed last week. 
// It will return a message based on if you ate too much or too little.

// 1. The first problem to solve is determining how many calories you consumed each day of the week.


function inputCaloriesByDay(day) {
 if (day === 'monday') {
     return 3500;
    } else if (day === 'tuesday') {
        return 15;
    } else if (day === 'wednesday') {
        return 1800;
        } else if (day === 'thursday') {
            return 2300;
        } else if (day === 'friday') {
            return 2400;
        } else if (day === 'saturday') {
            return 1500;
        } else if (day === 'sunday') {
            return 1500;
        } else {
            return 'Please choose valid day';
        }
 }
 console.log(inputCaloriesByDay('tuesday'))

function getTotalCalories() {
    return inputCaloriesByDay('monday') +
        inputCaloriesByDay('tuesday') +
        inputCaloriesByDay('wednesday') +
        inputCaloriesByDay('thursday') +
        inputCaloriesByDay('friday') +
        inputCaloriesByDay('saturday') +
        inputCaloriesByDay('sunday')
}

console.log(getTotalCalories())

function getIdealCalories() {
    var idealDailyCalories = 2000;
    return idealDailyCalories * 7;
}
console.log(getIdealCalories())
console.log(getTotalCalories())

function calculateHealthPlan() {
    var actualCalories = getTotalCalories();
    var idealCalories = getIdealCalories();
    if (actualCalories === idealCalories) {
        return 'You ate just the right amount of food!';
    } else if (actualCalories > idealCalories) {
        return 'Time to head to the gym!';
    } else { (actualCalories < idealCalories)
        return 'Time for seconds!';
    }
}

console.log(calculateHealthPlan())