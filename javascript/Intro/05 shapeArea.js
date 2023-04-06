//https://app.codesignal.com/arcade/intro/level-2/yuGuHvcCaFCKk56rJ

function solution(n) {  
  
    let b = 0;  
    let array = [1];  
    for (i=1;i<n;i++) {  
        b += 4;  
        array.push(array[array.length-1]+b);   
    };  
    return array[array.length-1];  
  
};  
  
solution(7) 