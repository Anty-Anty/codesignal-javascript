//https://app.codesignal.com/arcade/intro/level-8/Rqvw3daffNE7sT7d5

function solution(inputArray, k) {
    let rollingSum = inputArray.slice(0, k).reduce((a, b) => a + b);
    let max = rollingSum;
    for(let i = 0; i < inputArray.length - k; i++){
        rollingSum += inputArray[i + k] - inputArray[i];
        max = Math.max(max, rollingSum);
    }
    return max;
}