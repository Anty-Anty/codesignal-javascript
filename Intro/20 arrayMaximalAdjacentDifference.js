//https://app.codesignal.com/arcade/intro/level-5/EEJxjQ7oo7C5wAGjE

function solution(inputArray) {
    
    let arr = [];
    
    for (i=0;i<inputArray.length-1;i++){
        if (inputArray[i]>inputArray[i+1]){
            arr.push(inputArray[i] - inputArray[i+1])
        } else {arr.push(inputArray[i+1] - inputArray[i])}
    }

    let result = arr.reduce((a, b) => Math.max(a, b));
    
    return result
}