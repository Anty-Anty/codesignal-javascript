//https://app.codesignal.com/arcade/intro/level-4/xYXfzQmnhBvEKJwXP

function solution(a, b) {

    let array1 = [];
    let array2 = [];
    
    for (let i=0;i<a.length;i++){
        if (a[i]!==b[i]){
            array1.push(a[i]);
            array2.push(b[i]);
        }
    }
    array2 =array2.reverse().join('');
    array1=array1.join('');

    if (array1===array2){
        return true
    } 
    return false
    
}