//https://app.codesignal.com/arcade/intro/level-9/hoLtYWbjdrD2PF6yo

function solution(n) { 
    let count = 0;

    // repeat untill n is longer than one digit
    while(n.toString().length>1){
        let sum = 0;
        
        // split n into array
        let arr = n.toString().split('');

        // go through array to get sum of it digits and assign it to 'sum'
        for (let i = 0; i < arr.length; i++){
            sum += Number(arr[i]);
        }

        // reassign n with a new value
        n = sum;

        // count itterations
        count ++;
    }
    return count
}