//https://app.codesignal.com/arcade/intro/level-3/3AdBC97QNuhF6RwsQ

function solution(n) {
    let nString = n.toString()
    let half = nString.length/2;
    
    let firstHalfSum = 0;
    for (i=0;i<half;i++){
        firstHalfSum += Number(nString[i])
    }
    
    let secondHalfSum = 0;
    for (i=half;i<nString.length;i++){
        secondHalfSum += Number(nString[i])
    }
    
    if (firstHalfSum == secondHalfSum){
        return true
    } else {return false}
}