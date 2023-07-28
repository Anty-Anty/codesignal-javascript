//https://app.codesignal.com/arcade/intro/level-6/PWLT8GBrv9xXy4Dui

function solution(inputString) {
    // make tree arrays
    // 1. alphabet
    // 2. input string
    // 3. result array
    let alphabet = 'abcdefghijklmnopqrstuvwxyza'.split('');
    let str = inputString.split('');
    let result =[];
    
    // compare input with alphabit and push right element
    // into result
    for (let i=0; i<str.length; i++){
        for (let j=0; j<alphabet.length; j++){
            if (str[i]==alphabet[j]){
                result.push(alphabet[j+1]);
                break;
            }
        }
    }
    
    // join result array into string
    result = result.join('');
    return result
}