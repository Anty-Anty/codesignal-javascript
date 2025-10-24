//https://app.codesignal.com/arcade/intro/level-8/3AgqcKrxbwFhd3Z3R

function solution(inputArray, k) {
    
    let result =[];
    
    for(i=0;i<inputArray.length;i++){
        if((i+1) % k!=0){
            result.push(inputArray[i])
        }
    }

    return result
    
}