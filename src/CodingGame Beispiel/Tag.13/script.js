for(let i=1;i<=50;i++){
    if(i%3==0&&i%7==0){
        console.log("Coca Cola")
    }else if(
        i%3==0
    ){
        console.log("Cola")
    }
    else if( i%7==0){
        console.log("Coca")
    }
    else(console.log(i));
}


/*-------------------------*/

/*Summiere gerade Zahlen
/*Berechne die Summe aller ungeraden Zahlen zwischen 1 und 100*/  
let sum=0;
for(let i=1; i<=100;i++){
    if(i%2==0){
         sum+=i;
        console.log(i)
    }
    
}console.log("Die Summe aller gerade zahlen von 1-100 ist " + sum)