//https://app.codesignal.com/arcade/intro/level-7/ZFnQkq9RmMiyE6qtq

function solution(a) {

    // array of result numbers
    let result = [];

    // calculate sum of all absolute values
    // abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
    for (let i = 0; i < a.length; i++){
        let count = 0;
        for (let j = 0; j < a.length; j++){
            count += Math.abs(a[j]-a[i])
        }
        result.push(count)
    }

    // determines index of smallest result
    let indexOfSmallest = result.indexOf(Math.min(...result))
    
    // determines what element of a corresponds to that index
    let resultSecond = a[indexOfSmallest]

    return resultSecond
}