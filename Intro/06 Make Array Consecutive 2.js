//https://app.codesignal.com/arcade/intro/level-2/bq2XnSr5kbHqpHGJC

function solution(statues) { 
    a = Math.min(...statues); 
    b = Math.max(...statues); 
    arr = []; 
    for (i=a;i<=b;i++){ 
        arr.push(i) 
    } 
    c = arr.length - statues.length; 
     
    return c 
}