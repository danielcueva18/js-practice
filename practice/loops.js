// Make them true if they are returning false

// (5 > 7);
// (5 < 7)

// (7 === '7');
// (7 == '7');

// (7 === 'seven');
// (7 != 'seven')

// (false);
// (true)

// console.log((5 < 7) && (7 == '7'));
// console.log((5 < 4) || (7 != 'seven'));

// 1 if 2 else if 1 else 
// if, if else, else and 1 operator &&, ||

function weather(temparature) {
    if (temparature > 50 && temparature < 65) {
        return 'It\'s freezing';
        } else if (temparature > 65 && temparature < 80) {
            return 'it\s cool outside, wear a jacket';
        } else if (temparature === 80 || temparature <= 100) {
            return 'It\s shorts type of day';
        } else { 
            (temparature > 100)
            return 'you ded bruh, it\'s hot af'
        }
    }

console.log(weather(101))
