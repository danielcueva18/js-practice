// forloop

var scaryCreatures = ['lions', 'tigers', 'bears'];

for (var i = 0; i < scaryCreatures.length; i++);{ // initialize counter, condition, increment counter
    console.log(`Dorothy is afraid of ${scaryCreatures[i]}.`)
};

scaryCreatures.forEach(function(scaryCreatures) {
    console.log(`Dorothy is afraid of ${scaryCreatures[i]}.`);
});

// option index value

var guestInvites = ['Peter', 'Paul', 'Mary'];

guestInvites.forEach(function(guest, index) {
    console.log(`${index + 1}: ${guest}`);
});


