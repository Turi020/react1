/*Logische Verknüpfung: Mehrere Bedingungen prüfen
Gib die Zahlen von 1 bis 30 aus, aber:
	• Wenn die Zahl gerade und durch 3 teilbar ist, gib "Even & Divisible by 3" aus.
	• Wenn sie nur durch 3 teilbar ist, gib "Divisible by 3" aus.
	• Wenn sie nur gerade ist, gib "Even" aus.
	• Ansonsten gib die Zahl selbst aus.*/


    for(i=1;i<=30;i++){
        
            if(i%2==0 && i%3==0){
                console.log("Even & Divisible by 3")
        }
        else if(i%3==0){
            console.log("Divisible by 3")
        }
        else if(i%2==0){
            console.log("Even")
        }
        else(
            console.log(i)
        )
    }