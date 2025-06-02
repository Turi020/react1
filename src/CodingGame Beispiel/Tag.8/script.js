/*You are on a date, and based on how awkward the situation is, you need to come up with an excuse to leave. Write a function escapeDateawkwardnessLevelthat provides a reason to leave depending on the level of awkwardness.
Input
An integer awkwardnessLevel representing the awkwardness of the date. A higher number means a more awkward situation.
Output
A string representing your excuse to leave the date:

If awkwardnessLevel is between 1 and 3 (inclusive), return: I'll need to wake up early tomorrow.

If awkwardnessLevel is between 4 and 6 (inclusive), return: I'm feeling unwell, I need to leave.

If awkwardnessLevel is between 7 and 9 (inclusive), return: I forgot I have an important meeting soon.

If awkwardnessLevel is 10, return: Sorry, but I think this isn't working out.
Constraints
1 ≤ awkwardnessLevel ≤ 10
Example
Input
1
Output
I'll need to wake up early tomorrow.



/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const awkwardnessLevel = parseInt(readline());

if (awkwardnessLevel >= 1 && awkwardnessLevel <= 3) {
    console.log("I'll need to wake up early tomorrow.");

} else if (awkwardnessLevel >= 4 && awkwardnessLevel <= 6) {
    console.log("I'm feeling unwell, I need to leave.");

} else if (awkwardnessLevel >= 7 && awkwardnessLevel <= 9) {
    console.log("I forgot I have an important meeting soon.");
    
} else if (awkwardnessLevel === 10) {
    console.log("Sorry, but I think this isn't working out.");
}
// Write an answer using console.log()
// To debug: console.error('Debug messages...')