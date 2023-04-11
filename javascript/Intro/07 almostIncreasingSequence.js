//https://app.codesignal.com/arcade/intro/level-2/2mxbGwLzvkTCKAJMG

function solution(sequence) {
    if (sequence[0]>=sequence[1]) {
        sequence.splice(0,1);
    } 
    else if (sequence[sequence.length]<=sequence[sequence.length-1]){
        sequence.splice(sequence.length,1);
    }
    else {
        for (i=0;i<sequence.length;i++) {
            if (sequence[i]>sequence[i+1]) {
                if (sequence[i]>=sequence[i+2]){
                    sequence.splice(i,1);
                } else {sequence.splice(i+1,1);}   
                break;
            }
        }
    };
    
    for (i=0;i<sequence.length;i++) {
        if (sequence[i]>=sequence[i+1]){
            return false
        } 
    }
    return true  
}
