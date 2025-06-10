/*Find the hypotenuse of a right triangle given the length of the legs. Round to the nearest integer.
Input
Line 1:length of leg_1
Line 2:length of leg_2
Output
length of the hypotenuse
Constraints
1<=leg_1<=25
1<=leg_2<=25
Example
Input
2
3
Output
4

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const leg1 = 2;
const leg2 = 3;
const hypotenuse = Math.sqrt(leg1*leg1+leg2*leg2)
// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(Math.round(hypotenuse));