    const arr= ["9","421","94","80","99"];
    let sum =0;
    for(let i=0;i<arr.length;i++){
        const n = parseInt(arr[i])
        if(n%2==0){
            sum +=n
        }
    }console.log(sum)