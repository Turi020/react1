/*Ben is very broke. He cannot afford rent, so he is going to get a job this month so he won't be evicted. The job he is going to get pays P per hour, and he works H hours, and his rent costs R each month. Output YES if Ben can afford his rent with extra money, NO if he cannot afford his rent, and BARELY if he can afford his rent with no extra money
Input
Line 1: an integer P - the amount Ben earns each hour he works
Line 2: an integer H - the number of hours Ben works per month
Line 3: an integer R - the monthly rent Ben must pay
Output
Line 1: YES if Ben can afford his rent with extra money, NO if he cannot afford his rent, and BARELY if he can afford his rent with no extra money
Constraints
0<P, R, H<1000
Example
Input
20
100
600
Output
YES














/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const p = parseInt(readline());
const h = parseInt(readline());
const r = parseInt(readline());
const pay= h*p;
if(pay>r){
    console.log("YES");
}
else if(pay===r){
    console.log("BARELY");
}
else if(pay<r)
    console.log("NO");

// Write an answer using console.log()
// To debug: console.error('Debug messages...');