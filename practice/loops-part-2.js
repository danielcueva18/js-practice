// create a while loop that will run 5 times
// While loop says that once it is its turn to run, it will execute 
// itself until the expression becomes false, which will then move onto the next piece of code
// var fingers = 4;
// while (fingers < 5) {
//     console.log(fingers)
//     fingers++;
// }

// // the do loop is almost the opposite of the while loop - it will execute the code block first and 
// // then run the while loop
// var lemons = 7
// do {
//     console.log(lemons);
//     lemons++;
// } while (lemons < 7);

// create an array and fill it with at least 5 values numbers
// loop through that array with a for loop
// run that through an 1 if 2 else  3 else if statement


// 1. executed first
// 2. true or false
// 3. after it's been executed
// var books = ['Ben', 'Mark', 'Tony', 'Cardone', 'Hicks'];
// var booksArray = books.length
// for (i = 0; i < booksArray; i++) {
//     if (books[1] == 5) {
//         return 'my favorite book is ';
//     } else if (books == 7) {
//         return 'my other favorite book is ' + books[3];
//     }   else if  (books == 9) {
//         return books[4] + 'is okay';
//     } else {
//         return books + ' are all my favorite books'
//     }
// }

// we are creating an array as a variable, we are defining 1 to be 0 which will call out each array [0] and will go up 1 because of the i++
// we are doing .length so it gets the whole list and it stops after the last one

var battingAverage = [333, 327, 267, 294, 303, 310, 255, 242, 217];
console.log(battingAverage.length)
for (i = 0; i < battingAverage.length; i++) {
    if (battingAverage[i] > 300 ) {
    console.log('Here is a million dollar bonus');
} else if (battingAverage[i] > 280) {
    console.log('Here is half a million dollars');
} else if (battingAverage[i] > 250) {
    console.log('Try harder');
} else {
    console.log('You\'re cut');
}
}
