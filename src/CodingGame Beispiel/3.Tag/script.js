/*Sunrise. You drive your bus to the first bus stop without any passenger.
At each bus stop, some people get in the bus, and other people get off the bus.
You have to count how many people are in the bus at the end, including yourself.
Input
First line : the number n of bus stops.
n following lines : two numbers getIn and getOff
Output
Only one integer, nbPeople, the number of people in the bus at the end.
Constraints
n >= 1
getIn >= 0
getOff >= 0
Example
Input
3
2 0
4 1
1 3
Output
4*/

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline());
let people = 1;
for (let i = 0; i < n; i++) {
    var inputs = readline().split(' ');
    const getIn = parseInt(inputs[0]);
    const getOff = parseInt(inputs[1]);
    people+=getIn-getOff

}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(people);

