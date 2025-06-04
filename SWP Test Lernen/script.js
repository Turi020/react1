//let sum =0
for(let i = 1; i<=50; i++)
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz")
    }else if(i%3==0){
        console.log("Fizz");
    }else if( i%5==0){
        console.log("Buzz")
    }else (console.log(i));//

console.log("---------------------")
//let sum =0;
for(let i=1; i<=50;i++){
    if(i%2==0){
        console.log(i);
    }
}
 console.log("---------------------------")   

let sum1=0;
for(let i =1; i<=100;i++){
    if(!(i%2==0)){
        sum1+=i;
        console.log(i);
    }
}
console.log("Die Summe aller ungeraden Zahlen zwischen 1 und 100 sind " +  sum1)//


console.log("----------------")



for(let i =1; i<=20;i++){
    if(i%2==0){
        console.log("true");
    }
    else (console.log("false"))
}


