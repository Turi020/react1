/*The program:
Your program must print the sum of the square of the numbers given as input.

INPUT:
Line 1: An integer N for the amount of numbers to use.
Line 2: A line containing N space-separated integers Xi.

OUTPUT:
The sum of the squares of the Xi numbers.

CONSTRAINTS:
0 < N < 100
-1000 < Xi < 1000

EXAMPLE:
Input
3
1 2 3
Output
14*/
 
 
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
let sum =0;
const N = parseInt(readline());
var inputs = readline().split(' ');
for (let i = 0; i < N; i++) {
    const xi = parseInt(inputs[i]);
    sum+=xi*xi;
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(sum);