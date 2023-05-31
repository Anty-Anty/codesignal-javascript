//https://app.codesignal.com/arcade/intro/level-5/XC9Q2DhRRKQrfLhb5

function solution(inputArray) {

    // max value of obstacle coordinate
    // the jump length has to be lower than that
    let inputArrayMax = inputArray.reduce((a, b) => Math.max(a, b));

    // arrainging list of possible jump lengths
    // (all possible whole numbers except of obsticle coordinates)
    let arr = [];
    loop1:
    for (i=1;i<inputArrayMax;i++){
        loop2:
        for (j=0;j<inputArray.length;j++){
            if(i == inputArray[j]){
                continue loop1;
            } 
        }
        arr.push(i)
    }

    // checks modulo of possible jump lengths with obstacle coordinate
    // if modulo of possible jump lengths never equals zero, that's the right answer
    loop3:
    for (i=0;i<arr.length;i++){
        loop4:
        for (j=0;j<inputArray.length;j++){
            if(inputArray[j]%arr[i]==0){
                continue loop3
            }
        }
        return arr[i]
    }

    // if jump length is has to be bigger than any value inside inputArray:
    return inputArrayMax + 1
}