/*Line 1: An integer N, representing the number of elements.
Line 2: An integer K, representing the divisor.
Next N lines: Each containing one integer, representing an element from the list.
Output
Print the number of elements divisible by K.
Constraints
1 ≤ N, K ≤ 100
Example
Input
5
7
1
7
14
21
64
Output
3*/


/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
const K = parseInt(readline());

let amount = 0;
for (let i = 0; i < N; i++) {
    const NUM = parseInt(readline());

    if(NUM%K==0){
        amount+=1;
    }
} 

// Write an answer using console.log()
// To debug: console.error('Debug messages...');