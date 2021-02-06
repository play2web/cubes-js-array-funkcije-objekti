// TASK 1
// Create array with data, and loop through it, so in the end you console log this:

// "At position 0, subposition 0, value is 1"
// "At position 0, subposition 1, value is 2"
// "At position 0, subposition 2, value is 3"
// "At position 1, subposition 0, value is 4"
// "At position 1, subposition 1, value is 5"
// "At position 1, subposition 2, value is 6"
// "At position 2, subposition 0, value is 7"
// "At position 2, subposition 1, value is 8"
// "At position 2, subposition 2, value is 9"

var newData = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (var i = 0; i < newData.length; i++) {
    for (var j = 0; j < newData[i].length; j++) {
        console.log("At position " + [i] + ", subposition " + [j] + ", value is " + newData[i][j])
    }
}

// TASK 2: 
// Create a method that should console log name and age from any object. Then create array with multiple objects,
// each object should contain different names and ages. Call a method on each of them.

function whatIsMyAgeAndName(personData) {
    (personData.hasOwnProperty('name')) ? console.log("My name is: " + personData.name) : false;
    (personData.hasOwnProperty('age')) ? console.log("and My age is: " + personData.age) : false;
}

var persons = [
    {
        name: "Mike",
        age: 28
    },
    {
        name: "John",
        age: 30
    }
];

for (var i = 0; i < persons.length; i++) {
    whatIsMyAgeAndName(persons[i]);
}