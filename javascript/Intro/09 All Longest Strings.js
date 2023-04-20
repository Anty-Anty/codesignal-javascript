//https://app.codesignal.com/arcade/intro/level-3/fzsCQGYbxaEcTr2bL

function solution(inputArray) {
    let arrLengths = [];
    for (i=0;i<inputArray.length;i++){
        arrLengths.push(inputArray[i].length);
    };
    let maxLength = Math.max(...arrLengths);
    let arrResult = [];
    for (i=0;i<inputArray.length;i++){
        if (arrLengths[i] == maxLength) {
            arrResult.push(inputArray[i]);
        }
    };
    return arrResult
};    