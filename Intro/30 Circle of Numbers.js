//https://app.codesignal.com/arcade/intro/level-7/vExYvcGnFsEYSt8nQ

function solution(n, firstNumber) {
    // firstNumber is the number which is half of circumference away from it
    let half = n/2;
    if (firstNumber>=half){
        return firstNumber - half
    } else {return firstNumber + half}
}