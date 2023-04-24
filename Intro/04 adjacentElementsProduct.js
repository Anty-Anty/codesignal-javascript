//https://app.codesignal.com/arcade/intro/level-2/xzKiBHjhoinnpdh6m

function solution(inputArray) {  
    // creating array of products  
    let array = [];  
    for (i=0;i<inputArray.length-1;i++) {  
        let sum = array.push(inputArray[i]*inputArray[i+1]);  
          
    }  
      
    // bubble sort of array  
    for (i=0;i<array.length-1;i++){  
         for (j=0;j<array.length-1;j++){  
              if (array[j]<array[j+1]){  
                   let tmp = array[j];  
                   array[j] = array[j+1];  
                   array[j+1] = tmp;  
              }  
         }  
    }  
    return array[0];  
}  
  
solution([3, 6, -2, -5, 7, 3]); 