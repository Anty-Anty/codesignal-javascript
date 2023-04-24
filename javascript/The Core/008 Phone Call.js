//https://app.codesignal.com/arcade/code-arcade/intro-gates/mZAucMXhNMmT7JWta

function solution(min1, min2_10, min11, s) {
    let firstIteration = s-min1;
    let secondIteration = firstIteration - (9*min2_10); 
    if (firstIteration>0){
        if (secondIteration>0){
            let thirdIteration = 1+9+Math.floor(secondIteration/min11);
            return thirdIteration
        } else {
            let secondIterationPlus = 1+Math.floor(firstIteration/min2_10);
            return secondIterationPlus
        }
    } else if (firstIteration==0){return 1} else {return 0}
}