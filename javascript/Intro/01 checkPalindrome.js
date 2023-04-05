//https://app.codesignal.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ

function solution(inputString) {   
    if (inputString.length == 2) {   
        if (inputString[0] == inputString[1]){return true} else {return false}   
    };   
    let string_half = inputString.length/2;   
    if (string_half % 1 != 0){   
        inputString = inputString.slice(0,Math.floor(string_half)) + inputString.slice(Math.floor(string_half)+1,inputString.length);   
    }   
    for (i=0;i=Math.floor(string_half)-1;i++){   
        if (inputString[i] == inputString[inputString.length-1-i]){   
            return true   
        } else {return false}   
    }   
       
}   
  
solution("az");  
  
// ANOTHER SOLUTION FOUND ON INTERNET  
  
// function checkPalindrome(word) {      
//     var l = word.length;  
//     for (var i = 0; i < l / 2; i++) {  
//         if (word.charAt(i) !== word.charAt(l - 1 - i)) {  
//             return false;  
//         }  
//     }  
//     return true;  
// }      
  
// checkPalindrome(word)  