/*The game mode is REVERSE: You do not have access to the statement. You have to guess what to do by observing the following set of tests:
01 Test 1
Input
Expected output
4
0
1
2
3
true
false
true
false
02 Test 2
Input
Expected output
1
44
true
03 Test 3
Input
Expected output
1
179
false
04 Test 4
Input
Expected output
3
3254
24
654
true
true
true
05 Test 5
Input
Expected output
3
0
9001
42
true
false
true
06 Test 6
Input
Expected output
4
2
4
6
8
true
true
true
true
07 Test 7
Input
Expected output
3
10
7
11
true
false
false
08 Test 8
Input
Expected output
3
15
11
9
false
false
false
09 Test 9
Input
Expected output
3
22
11
212
true
false
true
10 Test 10
Input
Expected output
3
30
42
8
true
true
true


/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
for (let i = 0; i < N; i++) {
    const X = parseInt(readline());

    console.log(X%2===0)
    
    
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');


