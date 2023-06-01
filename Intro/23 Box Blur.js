//https://app.codesignal.com/arcade/intro/level-5/5xPitc3yT3dqS7XkP

function solution(image) {
    // array collects arrays with rounded down integers (pixels)
    let arrResult = [];
    // loop goes only through arrays with integers to round down (pixels to blur)
    for (i = 1; i<image.length-1;i++){
        // array collects rounded down integers (pixels)
        let arr = [];
        // loop goes through integers to round down, adds up 3x3 integers and devides it by 9
        for (j=1; j<image[i].length-1; j++){
            let result = (image[i-1][j-1]+image[i-1][j]+image[i-1][j+1]+
                         image[i][j-1]+image[i][j]+image[i][j+1]+
                         image[i+1][j-1]+image[i+1][j]+image[i+1][j+1])/9
            // sends rounded down integers to arr
            arr.push(Math.floor(result))
        }
        // sends arrays with rounded down integers to arrResult
        arrResult.push(arr)
    }
    return arrResult
}