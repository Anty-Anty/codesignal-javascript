//https://app.codesignal.com/arcade/code-arcade/intro-gates/wAGdN6FMPkx7WBq66

function solution(n) {
    let a = n.toString().split('');
    let sum = 0;
    for (i=0;i<a.length;i++){
        sum += Number(a[i])
    }
    return sum
}

solution(10);