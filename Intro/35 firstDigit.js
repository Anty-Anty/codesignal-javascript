//https://app.codesignal.com/arcade/intro/level-8/rRGGbTtwZe2mA8Wov

function solution(inputString) {

    let arr = inputString.split('')

    for (let i = 0; i < arr.length; i++){
        if(/[0-9]/.test(arr[i])){return arr[i]}
    }
}