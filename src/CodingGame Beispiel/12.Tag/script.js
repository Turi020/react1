/*Alex has two bottles for holding water. Bottle 1 can hold up to L1 liter of water .
Now it contains L2 liter of water. Bottle 2 contains L3 liter of water. he will transfer water from Bottle 2 to Bottle 1.

After transferring as much water as possible from Bottle 2 to Bottle 1,
he will get 15 coins FOR EACH litre of water left in Bottle 2
And he will give all of his money got from this to his little brother John.

Find how much money will his John get ?
Input
Line 1 : L1
Line 2 : L2
Line 3 : L3
Output
Line 1 : The amount of money John will get
Constraints
1 ≤ L2 ≤ L1 ≤ 20
1≤ L3 ≤ 20





/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const l1 = parseInt(readline());
const l2 = parseInt(readline());
const l3 = parseInt(readline());

const contain = l1-l2;
const transfer = Math.min(contain, l3)
const transfered=l3-transfer;
const sum =transfered*15;
// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(sum);
