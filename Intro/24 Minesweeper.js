//https://app.codesignal.com/arcade/intro/level-5/ZMR5n7vJbexnLrgaM

function solution(matrix) {


    // create matrix filled with zeroes
    let baseMatrix = []
    for (i=0;i<matrix.length;i++){
        let baseArr = []
        for (j=0;j<matrix[0].length;j++){
            baseArr.push(0)
        }
        baseMatrix.push(baseArr)
    }

    // change value of adjecent elements if element == true
    // many conditions to avoid attempts to manipulate elements outside of matrix
    for (i=0;i<matrix.length;i++){
        for (j=0;j<matrix[i].length;j++){
            if (matrix[i][j]){
                if (i!=0){
                    baseMatrix[i-1][j]+=1;
                }
                if (i!=0 && j!=matrix[0].length-1){
                    baseMatrix[i-1][j+1]+=1;
                }
                if (i!=0 && j!=0){
                    baseMatrix[i-1][j-1]+=1;
                }
                if (j!=0){
                    baseMatrix[i][j-1]+=1;
                }
                if (j!=0 && i!=matrix.length-1){
                    baseMatrix[i+1][j-1]+=1;
                }
                if (i!=matrix.length-1){
                    baseMatrix[i+1][j]+=1;
                }
                if (i!=matrix.length-1 && j!=matrix[0].length-1){
                    baseMatrix[i+1][j+1]+=1;
                }
                if (j!=matrix[0].length-1){
                baseMatrix[i][j+1]+=1;
                }
                
            }
        }
    }
    
    return baseMatrix
}
