//https://app.codesignal.com/arcade/intro/level-4/ZCD7NQnED724bJtjN/solutions

function solution(picture) {

    //make string of asterisks 
    
    var str = '';
    var asteriskStr = str.padEnd(picture[0].length+2,'*');

    //add asterisks to the beginning and end of existing strings
    
    for (i=0;i<picture.length;i++){
        picture[i]= '*'+picture[i]+'*'
    }

    //add strings with asterisks to the beginning and the end of the array

    picture.unshift(asteriskStr);
    picture.push(asteriskStr);

    return picture
}