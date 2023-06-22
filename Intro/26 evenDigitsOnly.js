//https://app.codesignal.com/arcade/intro/level-6/6cmcmszJQr6GQzRwW/

function solution(n) {
    let str =n.toString().split('');
    let result = 0;
    for (let i=0; i<str.length;i++){
        if (Number(str[i])%2!=0){
            result = false;
            break;
        } else {result = true}
    }
    return result
}