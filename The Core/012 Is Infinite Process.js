//https://app.codesignal.com/arcade/code-arcade/at-the-crossroads/aFF9HDm2Rsti9j5kc

function solution(a, b) {
    if (a==b) {return false}
    else if (a<b && (a+b)%2!=0) {return true}
    else if (a>=b-1) {return true}
    else {return false}
}
