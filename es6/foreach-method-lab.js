// var colorArray = [
//     {color: 'red'}, {color: 'yellow'}, {color: 'blue'}
// ];

// console.log(colorArray)

// es5
for (var i = 0; i < colorArray.length; i++) {
    console.log(`I value: ${i} | Color Name: ${colorArray[i].color}`);
};


// //es6
colorArray.forEach(function(color, index) {
    console.log(`I value: ${index} | Color Name: ${color.color}`)
});


var employees = [
    {name: 'Daniel', title: 'QA', salary: '$100,000'},
    {name: 'Mike', title: 'Dev', salary: "$120,000"},
    {name: 'Saad', title: 'QA', salary: "$85,000"}
];

for (var i = 0; i < employees.length; i++) {
    console.log(`${i + 1}: ${employees[i].name} is a ${employees[i].title} who makes ${employees[1].salary} every year`)
};

employees.forEach(function(employees, index) {
    console.log(`${index + 1}: ${employees.name} is a ${employees.title} who makes ${employees.salary} every year`)
})
