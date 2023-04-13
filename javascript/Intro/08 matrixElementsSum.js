//https://app.codesignal.com/arcade/intro/level-2/xskq4ZxLyqQMCLshr

function solution(matrix) {
    if (matrix[0].length == 1 && matrix.length == 1){
        return matrix[0][0]
    }
    else {
        let a = 0;
        loop1:
            for (i=0;i<matrix[0].length;i++){
                loop2:
                    for (j=0;j<matrix.length; j++){
                        if (matrix[j][i]>0){ 
                            a += matrix[j][i];
                        } else { 
                            break loop2;
                        }
                    }
            }
        return a
    }
};    