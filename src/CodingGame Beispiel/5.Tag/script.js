/*FizzBuzz-Variante
Erstelle eine Schleife, die Zahlen von 1 bis 50 durchläuft und:
	• "Fizz" ausgibt, wenn die Zahl durch 3 teilbar ist,
	• "Buzz" ausgibt, wenn die Zahl durch 5 teilbar ist,
	• "FizzBuzz" ausgibt, wenn sie durch 3 und 5 teilbar ist,
	• ansonsten die Zahl selbst ausgibt.*/


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

/*Summiere ungerade Zahlen
Berechne die Summe aller ungeraden Zahlen zwischen 1 und 100*/  

let sum1=0;
for(let i =1; i<=100;i++){
    if(!(i%2==0)){
        sum1+=i;
        console.log(i);
    }
}
console.log("Die Summe aller ungeraden Zahlen zwischen 1 und 100 sind " +  sum1)//


console.log("----------------")



//Summiere alle Zahlen außer Vielfache von 5
//Berechne die Summe aller Zahlen von 1 bis 30, aber überspringe alle Vielfachen von 5

let sum6=0;

for(let i =1; i<=30;i++){
    if(!(i%5==0)){
        sum6+=i;
    }
}console.log(sum6)