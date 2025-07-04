/*Goal
You have a room filled with water, and you need to calculate the quantity of water in cubic feet that the room contains. You are given the dimensions of the room: length, width, and height in feet.

Takes the room's dimensions as input and calculates the volume of water in the room. If any of the room's dimensions are zero or negative, output Invalid dimension.
Input
Three integers separated by spaces, representing the length, width, and height of the room in feet.
Output
Either The quantity of water in the room is volume cubic feet., where volume is the volume of water in the room, or Invalid dimension.
Constraints
Example
Input
25 18 20
Output
The quantity of water in the room is 9000 cubic feet.
 /**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const length = parseInt(inputs[0]);
const width = parseInt(inputs[1]);
const height = parseInt(inputs[2]);

if(height *width*length==0){
    console.log("Invalid dimension")
}
else{console.log("The quantity of water in the room is " + height *width*length + " cubic feet.")}
// Write an answer using console.log()
// To debug: console.error('Debug messages...');