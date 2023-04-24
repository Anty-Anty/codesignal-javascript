//https://app.codesignal.com/arcade/code-arcade/intro-gates/aiKck9MwwAKyF8D4L

function solution(n) {

    let hour = Math.floor(n/60);
    let minutes = n%60;
    let time = hour.toString() + minutes.toString();
    let sum = 0;
    for (i=0;i<time.length;i++){
        sum += Number(time.charAt(i));
    }
    return sum
}