//https://app.codesignal.com/arcade/intro/level-9/xHvruDnQCx7mYom3T

function solution(upSpeed, downSpeed, desiredHeight) {
    let currentHeight = 0;
    let count = 0;
    while (currentHeight < desiredHeight){
        currentHeight += upSpeed;
        count ++;
        if (currentHeight>=desiredHeight){return count};
        currentHeight -= downSpeed;
    }
}