//https://app.codesignal.com/arcade/intro/level-4/Xfeo7r9SBSpo3Wico

function solution(inputString) {

    // split string into array
    
    const chars = inputString.split('');
    
    // create object with number of duplicates of each element in array

    const counts = {};
    chars.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

    // check if total number of each uniq element in array is even
    
    let count = 0;
    
    Object.values(counts).forEach(function(val){if (val%2!=0){count += 1}});

    // if number of "uneven" elements is more than one
    // then is not impossible to make palindrome
    
    if (count>1){
        return false
    } else {return true}
  
}