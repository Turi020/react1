/*Line 1: An integer f represents how much the new phone cost.
Line 2: An integer g represents how much money your father will give you as a gift.
Line 3: An integer d represents how much your sister will take from the money.
Output
Line 1: The remaining money is:remaining, where remaining is an integer for the remaining amount of the gift money after your sister's share
Line 2: I can afford (if the remaining money is enough to buy the new phone) or I can't afford (if the remaining money is not enough to buy the new phone).
Constraints
f, d< g
Example
Input
1200
2000
500
Output
The remaining money is:1500
I can afford


/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const f = 1200;
const g = 2000;
const d = 500;


const money= g-d;

  console.log("The remaining money is:" + money);

 if(f<=money){
    console.log("I can afford")
}
else(console.log("I can't afford"))
// Write an answer using console.log()
// To debug: console.error('Debug messages...');