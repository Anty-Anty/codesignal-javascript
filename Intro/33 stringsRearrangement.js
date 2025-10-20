//https://app.codesignal.com/arcade/intro/level-7/PTWhv2oWqd6p4AHB9

function solution(inputArray) {
    
    function differByOne(str1, str2){
        let mismatches = 0;
    
        for(let i =0; i < str1.length; i++){
            if(str1[i]!=str2[i]){
                mismatches ++
            }
        }
        return mismatches == 1;
    }
    
    function permute(nums) {
      let result = [];
      if (nums.length === 0) return [];
      if (nums.length === 1) return [nums];
      for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
        const remainingNumsPermuted = permute(remainingNums);
       for (let j = 0; j < remainingNumsPermuted.length; j++) {
          const permutedArray = [currentNum].concat(remainingNumsPermuted[j]);
          result.push([...permutedArray]);
        }
      }
      return result;
    }
    

    let sequences = permute(inputArray);

    for(let sequence of sequences){
        let possible = true;
        
        for(let i = 1; i < sequence.length; i++){
            let thisOne = sequence[i];
            let previousOne = sequence[i-1];
            
            if(!differByOne(thisOne,previousOne)){
                possible = false;
                break;
            }
        }
        if(possible) return true;
    }
    return false;
}