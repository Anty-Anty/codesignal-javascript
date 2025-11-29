//https://app.codesignal.com/arcade/intro/level-9/AACpNbZANCkhHWNs3

function solution(inputString) {

    const regex = /^[0-9]*/g;
    const found = inputString.match(regex);
    return found.join('');
}

solution("123aa1");