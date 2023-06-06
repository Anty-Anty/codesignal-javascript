//https://app.codesignal.com/arcade/intro/level-6/mCkmbxdMsMTjBc3Bm/

function solution(inputArray, elemToReplace, substitutionElem) {
    
    let result = [];
    for(i=0;i<inputArray.length;i++){ 
        if(inputArray[i]==elemToReplace){
            result.push(substitutionElem)
        } else {result.push(inputArray[i])}
    }

    return result
    
}
