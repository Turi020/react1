/*The program:
You will be given a positive integer N as input.
Print the factorial of N.

INPUT:
Line 1 : N the integer.

OUTPUT:
N!, the factorial of N.

CONSTRAINTS:
0 < N ≤ 12

EXAMPLE:
Input
4
Output
24
/
 
Auto-generated code below aims at helping you parse,
the standard input according to the problem statement.,
*/
let result=1;
const N = parseInt(readline());
for(i=1;i<=N;i++){
     result*=i;
}


// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(result);