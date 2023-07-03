//https://app.codesignal.com/arcade/intro/level-6/6Wv4WsrsMJ8Y2Fwno

function solution(name) {
    let result = /^[a-zA-Z_]+[a-zA-Z0-9_]*$/.test(name);
    return result
}