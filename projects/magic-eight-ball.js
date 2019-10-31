var userName = prompt('What is your name?');
if (userName) {
    console.log('Hello ' + userName);
} else {
    console.log('Hello') 
}

var userQuestion = prompt('Please ask a question!');
console.log(userName + ' ' + 'your question was ' + userQuestion);

var randomNumber = Math.floor(Math.random() * 8);
var eighBall = '';

switch (randomNumber) {
    case 0: 
        eighBall = 'Better not tell you now.'
        break;
    case 1:
        eighBall = 'Concentrate and ask again.'
        break;
    case 2:
        eighBall = 'Reply hazy try again'
        break;
    case 3:
        eighBall = 'Cannot predict now'
        break;
    case 4:
        eighBall = 'My reply is no.'
        break;
    case 5:
        eighBall = 'My sources say no'
        break;
    case 6:
        eighBall = 'Outlook not so good'
        break;
    case 7:
        eighBall = 'Signs point to yes'
        break;
}

// if statements if it wasn't switch
// if (randomNumber === 0) {
//     return 'Better not tell you now.';
// } else if (randomNumber === 1) {
//     return 'Concentrate and ask again.';
// } else if (randomNumber === 2) {
//     return 'Reply hazy try again';
// } else if (randomNumber === 3) {
//     return 'Cannot predict now';
// } else if (randomNumber === 4) {
//     return 'Dont count on it';
// } else if (randomNumber === 5) {
//     return 'My reply is no.';
// } else if (randomNumber === 6) {
//     return 'Outlook not so good';
// } else if (randomNumber === 7) {
//     return 'Reply hazy try again';
// } else {
//     return 'Signs point to yes';
// } 