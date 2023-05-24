//https://app.codesignal.com/arcade/intro/level-4/xvkRbxYkdHdHNCKjg
function solution(inputArray) {
    let count = 0;
    for (i=1;i<inputArray.length;i++){
        while (inputArray[i-1]>=inputArray[i]){
            inputArray[i] += 1;
            count += 1;
        }
    }
    return count
}