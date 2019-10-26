function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    
    if (userInput === 'bear' || userInput === 'human' || userInput === 'gun') {
        return userInput
    } else {
        return 'Error'
    }
}

function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'bear';
    } else if (randomNumber === 1) {
        return 'human';
    } else {
        return 'gun'
    }
}

function determineWinner(userChoice, computerChoice ) {
    if (userChoice === computerChoice) {
        return 'Tie game'
    }
    if (userChoice === 'human') {
        if (computerChoice === 'bear') {
            return 'Computer has won!'
        } else {
            return 'User has won'
        }
    }
    if (userChoice === 'bear') {
        if (computerChoice === 'gun') {
            return 'Computer has won!'
        } else {
            return 'User has won'
        }
    }
    if (userChoice === 'gun') {
        if (computerChoice === 'human') {
            return 'Computer has won!' 
        } else {
            return 'User has won'
        }
    }
}

// console.log(determineWinner('bear', 'human'))
// console.log(determineWinner('human', 'bear'))
// console.log(determineWinner('human', 'human'))

function playGame() {
    var promptUserChoice = readline('Please choose bear, human or gun');
    var userChoice = getUserChoice(promptUserChoice);
    var computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice))
}

// This will work if ran on a browser console only due to the promp command