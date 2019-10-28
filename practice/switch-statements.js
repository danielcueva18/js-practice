// switch (expression) {
//     case A:
//         code block:
//         break;
//     case B:
//         code block;
//         break;
//     case C:
//         code block;
//         C:
//     default:
//         code block:
// }


// pass an expression regarding dice roll 6 best 1 worst
// code block for any match
// enter any number 1 - 6
// hard code 1 to 6
// or random number

function diceRollGame(diceRoll) {
    diceRoll = Math.floor(Math.random() * 7)
switch (diceRoll) {
    case 1: 
        diceRoll == 1
        return 'This is the worst number'
        break;
    case 2:
        diceRoll == 2
        return 'You rolled 2.. keep trying'
    case 3: 
        diceRoll == 3
        return 'This is 3.. meh'
        break;
    case 4:
        diceRoll == 4
        return 'You rolled 4.. I like it'
    case 5: 
        diceRoll == 5
        return '5 is good!'
        break;
    case 6:
        diceRoll == 6
        return 'You rolled 6.. Good job'
        break;
    default:
        return 'keep trying..'
    }
}
console.log(diceRollGame())