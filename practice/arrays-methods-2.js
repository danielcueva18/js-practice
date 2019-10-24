var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// build another array and add the two together

var myColors = ['navy blue', 'maroon', 'black'];

var allColors = colors.concat(myColors)

var moreColors = ['white', 'pink', 'brown'];

var allColorsForeal = moreColors.concat(allColors);

var allColorsForeal2 = colors.concat(myColors, moreColors)

// reverse all the elements in the allColors array
// sort all the elements in the allColors array by alpha order

var colorsReversed = allColors.reverse()

var colorsAlpha = allColors.sort()

// create var winter and fill it with winter values
// create var summer and fill it with summer values

var weather = ['snowy', 'cloudy', 'rainy', 'chilly', 'cold', 'hot', 'warm', 'humid'];

var winter = weather.slice(0, 5);
var winter1 = weather.slice(-8, -3);
var summer = weather.slice(5)
var summer1 = weather.slice(-3)

console.log('winter weather ' + winter);
console.log('also winter weather ' + winter1);
console.log('summer weather ' + summer);
console.log('also summer weather ' + summer1);

console.log(weather)